const lcid = require('windows-locale')
const iso = require('iso639-codes')

let all = []

let lcidLanguage
let isoLanguage

const lcidKeys = Object.keys(lcid)
const isoKeys = Object.keys(iso)

lcidKeys.map((id) => {
	lcidLanguage = id
	isoLanguage = isoKeys.find(name => name.toLowerCase() == lcid[lcidLanguage].language.toLowerCase())
	if (!isoLanguage) {
		all.push({
			['name']     : lcid[lcidLanguage]['language'],
			['location'] : lcid[lcidLanguage]['location'],
			['tag']      : lcid[lcidLanguage]['tag'],
			['lcid']     : lcid[lcidLanguage]['id'],
			['iso639-2'] : null,
			['iso639-1'] : null
		})
	} else {
		all.push({
			['name']     : lcid[lcidLanguage]['language'],
			['location'] : lcid[lcidLanguage]['location'],
			['tag']      : lcid[lcidLanguage]['tag'],
			['lcid']     : lcid[lcidLanguage]['id'],
			['iso639-2'] : iso[isoLanguage]['iso639-2'],
			['iso639-1'] : iso[isoLanguage]['iso639-1']
		})
	}
})

const where = (key = 'name', text = '') => {
	if (key == 'lcid') {
		return all.find(e => e[key] == text)
	}
	return all.find(e => e[key].toLowerCase() == text.toLowerCase())
}

const getByName = (text) => where('name', text)

const getByLocation = (text) => where('location', text)

const getByTag = (text) => where('tag', text)

const getByLCID = (id) => where('lcid', Number(id))

const getByISO6392 = (text) => where('iso639-2', text)

const getByISO6391 = (text) => where('iso639-1', text)

module.exports = {
	all,
	where,
	getByName,
	getByLocation,
	getByTag,
	getByLCID,
	getByISO6392,
	getByISO6391
}
