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

const all: ILocale[] = []

let lcidLanguage: string
let isoLanguage: string | undefined

const lcidKeys = Object.keys(lcid)
const isoKeys = Object.keys(iso)

lcidKeys.map(id => {
	lcidLanguage = id
	const lcidEntry = (lcid as any)[lcidLanguage] as LcidEntry
	const locale: ILocale = {
		name: lcidEntry.language,
		local: undefined,
		location: lcidEntry.location || undefined,
		tag: lcidEntry.tag,
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

const where = (key: keyof ILocale = 'name', text: string | number = ''): ILocale | undefined => {
	if (key === 'lcid') {
		return all.find(element => element[key] === text)
	}

	return all.find(element => (element[key] || '').toString().toLowerCase() === text.toString().toLowerCase())
}

const getByName = (text: string): ILocale | undefined => where('name', text)

const getByNameLocal = (text: string): ILocale | undefined => where('local', text)

const getByLocation = (text: string): ILocale | undefined => where('location', text)

const getByTag = (text: string): ILocale | undefined => where('tag', text)

const getByLCID = (id: number): ILocale | undefined => where('lcid', id)

const getByISO6392 = (text: string): ILocale | undefined => where('iso639-2', text)

const getByISO6391 = (text: string): ILocale | undefined => where('iso639-1', text)

const localeCodes: LocaleCodes = {
	all,
	where,
	getByName,
	getByNameLocal,
	getByLocation,
	getByTag,
	getByLCID,
	getByISO6392,
	getByISO6391
}

export = localeCodes