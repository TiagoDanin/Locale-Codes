const lcid = require('windows-locale')
const iso = require('iso639-codes')
const langs = require('langs').all()

const all = []

let lcidLanguage
let isoLanguage

const lcidKeys = Object.keys(lcid)
const isoKeys = Object.keys(iso)

lcidKeys.map(id => {
	lcidLanguage = id
	const locale = {
		name: lcid[lcidLanguage].language,
		local: null,
		location: lcid[lcidLanguage].location,
		tag: lcid[lcidLanguage].tag,
		lcid: lcid[lcidLanguage].id,
		'iso639-2': null,
		'iso639-1': null
	}

	isoLanguage = isoKeys.find(name => name.toLowerCase() === lcid[lcidLanguage].language.toLowerCase())
	if (isoLanguage) {
		locale['iso639-2'] = iso[isoLanguage]['iso639-2']
		locale['iso639-1'] = iso[isoLanguage]['iso639-1']

		const nameLocal = langs.find(element => {
			if (element['2T']) {
				return element['2T'].toLowerCase() === locale['iso639-2']
			}

			return false
		})

		if (nameLocal) {
			locale.local = nameLocal.local
		}
	}

	all.push(locale)
})

const where = (key = 'name', text = '') => {
	if (key === 'lcid') {
		return all.find(element => element[key] === text)
	}

	return all.find(element => element[key].toLowerCase() === text.toLowerCase())
}

const getByName = text => where('name', text)

const getByNameLocal = text => where('local', text)

const getByLocation = text => where('location', text)

const getByTag = text => where('tag', text)

const getByLCID = id => where('lcid', Number(id))

const getByISO6392 = text => where('iso639-2', text)

const getByISO6391 = text => where('iso639-1', text)

module.exports = {
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
