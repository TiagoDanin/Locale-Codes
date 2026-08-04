// @ts-ignore
import * as lcid from 'windows-locale'
import * as iso from 'iso639-codes'
import { all as langs } from 'langs'
import type { ILocale, LocaleCodes } from './types'
import type * as Types from './types'

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

/**
 * Every tag shipped by `windows-locale`, lowercased, used to keep tag
 * normalization from shadowing an existing locale.
 */
const knownTags = new Set(
	lcidKeys
		.map(key => (lcid as any)[key])
		.filter(entry => isLcidEntry(entry))
		.map((entry: LcidEntry) => entry.tag.toLowerCase())
)

/**
 * Normalizes a LCID tag.
 * Older `windows-locale` releases ship entries whose tag was truncated by the
 * upstream PDF parser and left with a trailing separator - e.g. `tzm-Latn-`,
 * `ccp-Cakm-` and `ca-ES-`. The separator is stripped so the tag is a valid
 * BCP 47 style tag.
 *
 * The trailing separator is NOT a missing character: the real tags are
 * `tzm-Latn-MA`, `ccp-Cakm-BD`/`ccp-Cakm-IN` and `ca-ES-valencia`, so stripping
 * it can collide with a different locale that legitimately owns the shortened
 * tag - `tzm-Latn` (LCID 31839) and `ca-ES` (LCID 1027) both exist on their
 * own. When that happens the original value is kept, because silently making
 * `getByTag('tzm-Latn')` resolve to another locale is worse than an odd tag.
 *
 * The function is defensive and idempotent: against data where the upstream
 * parser is fixed it is a no-op.
 * See https://github.com/TiagoDanin/Locale-Codes/issues/28
 */
const normalizeTag = (tag: string | null | undefined): string => {
	if (tag === null || tag === undefined) {
		return ''
	}

	const value = tag.toString()
	const stripped = value.replace(/-+$/, '')
	if (stripped === value || knownTags.has(stripped.toLowerCase())) {
		return value
	}

	return stripped
}

lcidKeys.map(id => {
	lcidLanguage = id
	const lcidEntry = (lcid as any)[lcidLanguage] as LcidEntry
	if (!isLcidEntry(lcidEntry)) {
		return
	}

	// Absent fields are `null`, not `undefined`, so every entry keeps the same
	// key set and `JSON.stringify(locale.all)` emits the documented
	// `"local": null` / `"location": null` shape.
	const locale: ILocale = {
		name: lcidEntry.language,
		local: null,
		location: lcidEntry.location || null,
		tag: normalizeTag(lcidEntry.tag),
		lcid: lcidEntry.id,
		'iso639-2': null,
		'iso639-1': null
	}

	isoLanguage = isoKeys.find(name => name && lcidEntry.language && name.toLowerCase() === lcidEntry.language.toLowerCase())
	if (isoLanguage) {
		const isoEntry = (iso as any)[isoLanguage] as IsoEntry
		locale['iso639-2'] = isoEntry['iso639-2']
		locale['iso639-1'] = isoEntry['iso639-1'] || null

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
		if (typeof text !== 'number' && `${text}`.trim() === '') {
			return false
		}

		// Number() instead of parseInt() so "1046abc" does not match 1046.
		const id = typeof text === 'number' ? text : Number(text)
		if (!Number.isFinite(id)) {
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

const getByLCID = (id: number | string): ILocale | undefined => where('lcid', id)

const getByISO6392 = (text: string): ILocale | undefined => where('iso639-2', text)

const getByISO6391 = (text: string): ILocale | undefined => where('iso639-1', text)

const getAllByName = (text: string): ILocale[] => whereAll('name', text)

const getAllByNameLocal = (text: string): ILocale[] => whereAll('local', text)

const getAllByLocation = (text: string): ILocale[] => whereAll('location', text)

const getAllByTag = (text: string): ILocale[] => whereAll('tag', text)

const getAllByLCID = (id: number | string): ILocale[] => whereAll('lcid', id)

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

/**
 * Publishes the public types next to the value exported by `export =`.
 * A declaration-only namespace merges with the const without changing the
 * JavaScript emit - `module.exports = localeCodes` stays exactly the same -
 * so `require('locale-codes')` keeps returning the object itself while
 * TypeScript users can write:
 *   import locale, {ILocale} from 'locale-codes'
 *   import type {ILocale, LocaleCodes} from 'locale-codes'
 */
declare namespace localeCodes {
	export type ILocale = Types.ILocale
	export type LocaleCodes = Types.LocaleCodes
}

export = localeCodes
