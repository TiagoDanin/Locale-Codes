// @ts-ignore
import * as lcid from 'windows-locale'
import * as iso from 'iso639-codes'
import { all as langs } from 'langs'
import type { ILocale, LocaleCodes } from './types'

// Type definitions for external modules
interface LcidEntry {
	language: string
	location: string | null
	tag: string
	id: number
}

interface IsoEntry {
	'iso639-2': string
	'iso639-1': string | null
}

interface LangEntry {
	'2T'?: string
	local?: string
}

/**
 * Normalizes a LCID tag.
 * Some `windows-locale` entries ship a trailing separator - e.g. `tzm-Latn-`,
 * `ccp-Cakm-` and `ca-ES-`. The trailing separator is stripped so the tag is
 * always a valid BCP 47 style tag.
 * This is defensive and idempotent: once the data is fixed upstream this
 * function becomes a no-op instead of corrupting the value.
 * See https://github.com/TiagoDanin/Locale-Codes/issues/28
 */
const normalizeTag = (tag: string | null | undefined): string => {
	if (tag === null || tag === undefined) {
		return ''
	}

	return tag.toString().replace(/-+$/, '')
}

const all: ILocale[] = []

let lcidLanguage: string
let isoLanguage: string | undefined

const lcidKeys = Object.keys(lcid)
const isoKeys = Object.keys(iso)

/**
 * Guards against non locale properties exposed by the module namespace
 * - e.g. the `default` interop key - which would otherwise be pushed into
 * `all` as an entry with an empty tag and an object as LCID.
 */
const isLcidEntry = (entry: any): entry is LcidEntry =>
	Boolean(entry) && typeof entry.tag === 'string' && typeof entry.id === 'number'

lcidKeys.map(id => {
	lcidLanguage = id
	const lcidEntry = (lcid as any)[lcidLanguage] as LcidEntry
	if (!isLcidEntry(lcidEntry)) {
		return
	}

	const locale: ILocale = {
		name: lcidEntry.language,
		local: undefined,
		location: lcidEntry.location || undefined,
		tag: normalizeTag(lcidEntry.tag),
		lcid: lcidEntry.id,
		'iso639-2': undefined,
		'iso639-1': undefined
	}

	isoLanguage = isoKeys.find(name => name && lcidEntry.language && name.toLowerCase() === lcidEntry.language.toLowerCase())
	if (isoLanguage) {
		const isoEntry = (iso as any)[isoLanguage] as IsoEntry
		locale['iso639-2'] = isoEntry['iso639-2']
		locale['iso639-1'] = isoEntry['iso639-1'] || undefined

		const nameLocal = langs().find((element: LangEntry) => {
			if (element['2T']) {
				return element['2T'].toLowerCase() === locale['iso639-2']
			}

			return false
		})

		if (nameLocal && nameLocal.local) {
			locale.local = nameLocal.local
		}
	}

	all.push(locale)
})

/**
 * Compares a single locale entry against a searched value.
 * Null/undefined fields never throw and never match, so searching for an
 * empty string does not produce a false positive against missing values.
 * See https://github.com/TiagoDanin/Locale-Codes/issues/25
 * and https://github.com/TiagoDanin/Locale-Codes/issues/10
 */
const isMatch = (element: ILocale, key: keyof ILocale, text: string | number | null | undefined): boolean => {
	if (key === 'lcid') {
		const id = typeof text === 'number' ? text : Number.parseInt(`${text}`, 10)
		if (Number.isNaN(id)) {
			return false
		}

		return element.lcid === id
	}

	const value = element[key]
	if (value === null || value === undefined) {
		return false
	}

	if (text === null || text === undefined) {
		return false
	}

	return value.toString().toLowerCase() === text.toString().toLowerCase()
}

const where = (key: keyof ILocale = 'name', text: string | number = ''): ILocale | undefined =>
	all.find(element => isMatch(element, key, text))

const whereAll = (key: keyof ILocale = 'name', text: string | number = ''): ILocale[] =>
	all.filter(element => isMatch(element, key, text))

const getByName = (text: string): ILocale | undefined => where('name', text)

const getByNameLocal = (text: string): ILocale | undefined => where('local', text)

const getByLocation = (text: string): ILocale | undefined => where('location', text)

const getByTag = (text: string): ILocale | undefined => where('tag', text)

const getByLCID = (id: number): ILocale | undefined => where('lcid', id)

const getByISO6392 = (text: string): ILocale | undefined => where('iso639-2', text)

const getByISO6391 = (text: string): ILocale | undefined => where('iso639-1', text)

const getAllByName = (text: string): ILocale[] => whereAll('name', text)

const getAllByNameLocal = (text: string): ILocale[] => whereAll('local', text)

const getAllByLocation = (text: string): ILocale[] => whereAll('location', text)

const getAllByTag = (text: string): ILocale[] => whereAll('tag', text)

const getAllByLCID = (id: number): ILocale[] => whereAll('lcid', id)

const getAllByISO6392 = (text: string): ILocale[] => whereAll('iso639-2', text)

const getAllByISO6391 = (text: string): ILocale[] => whereAll('iso639-1', text)

const localeCodes: LocaleCodes = {
	all,
	where,
	whereAll,
	getByName,
	getByNameLocal,
	getByLocation,
	getByTag,
	getByLCID,
	getByISO6392,
	getByISO6391,
	getAllByName,
	getAllByNameLocal,
	getAllByLocation,
	getAllByTag,
	getAllByLCID,
	getAllByISO6392,
	getAllByISO6391
}

export = localeCodes
