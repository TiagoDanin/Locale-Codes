const locale = require('../dist/index')
const assert = require('assert')

assert.equal(locale.all.length > 20, true)
assert.equal(locale.getByTag('pt-br').name, 'Portuguese')
assert.equal(locale.getByTag('pt-br').local, 'Português')
assert.equal(locale.getByTag('js-best'), undefined)

// Issue #28 - tags must not keep the trailing "-" shipped by windows-locale
assert.equal(locale.getByTag('tzm-latn') !== undefined, true)
assert.equal(locale.getByTag('tzm-latn').tag, 'tzm-Latn')
assert.equal(locale.getByTag('ccp-cakm').tag, 'ccp-Cakm')
assert.equal(locale.getByTag('ca-es').tag, 'ca-ES')
assert.equal(locale.all.some(item => item.tag.endsWith('-')), false)
assert.equal(locale.all.every(item => typeof item.tag === 'string' && item.tag !== ''), true)
assert.equal(locale.all.every(item => typeof item.lcid === 'number'), true)
assert.equal(locale.all.every(item => typeof item.name === 'string'), true)

// Issue #25 / #10 - where() must never throw on null/undefined fields
assert.doesNotThrow(() => locale.where('local', 'Español'))
assert.doesNotThrow(() => locale.where('local', 'English'))
assert.doesNotThrow(() => locale.where('local', 'العربية'))
assert.doesNotThrow(() => locale.where('local', 'Brezhoneg'))
assert.doesNotThrow(() => locale.where('local', 'this-locale-does-not-exist'))
assert.doesNotThrow(() => locale.where('location', 'this-location-does-not-exist'))
assert.doesNotThrow(() => locale.where('iso639-1', 'this-code-does-not-exist'))
assert.equal(locale.where('local', 'this-locale-does-not-exist'), undefined)
assert.equal(locale.getByNameLocal('Español').name, 'Spanish')
assert.equal(locale.getByNameLocal('العربية').name, 'Arabic')
// An empty search must not match entries whose field is missing
assert.equal(locale.where('local', ''), undefined)
assert.equal(locale.where('iso639-1', ''), undefined)

// Issue #24 - whereAll()/getAllBy* return every match without breaking getBy*
assert.equal(Array.isArray(locale.getAllByISO6391('en')), true)
assert.equal(locale.getAllByISO6391('en').length > 100, true)
assert.equal(locale.getAllByTag('pt-br').length, 1)
assert.deepEqual(locale.getAllByName('inexistente'), [])
assert.deepEqual(locale.whereAll('tag', 'pt-br'), [locale.getByTag('pt-br')])
assert.equal(locale.getAllByISO6391('en').every(item => item['iso639-1'] === 'en'), true)
assert.equal(locale.getAllByISO6391('en').some(item => item.tag === 'en-US'), true)
assert.equal(locale.getAllByISO6391('en').some(item => item.tag === 'en-GB'), true)
assert.equal(locale.getAllByLCID(1046).length >= 1, true)
assert.deepEqual(locale.getAllByLCID(999999), [])
// The single-result API must keep its old shape
assert.equal(Array.isArray(locale.getByISO6391('en')), false)
assert.equal(locale.getByISO6391('en')['iso639-1'], 'en')

// Public API surface - every documented method exists, every getBy* stays single
const singleResultMethods = {
	getByName: 'Portuguese',
	getByNameLocal: 'Português',
	getByLocation: 'Brazil',
	getByTag: 'pt-BR',
	getByLCID: 1046,
	getByISO6392: 'por',
	getByISO6391: 'pt'
}
Object.keys(singleResultMethods).forEach(method => {
	const result = locale[method](singleResultMethods[method])
	assert.equal(typeof locale[method], 'function', `${method} must be exported`)
	assert.equal(Array.isArray(result), false, `${method} must not return an array`)
	assert.equal(typeof result, 'object', `${method} must return a single locale`)
	assert.equal(locale[method]('js-best'), undefined, `${method} must return undefined when there is no match`)
	assert.equal(Array.isArray(locale[method.replace('getBy', 'getAllBy')](singleResultMethods[method])), true)
})
assert.equal(locale.where('tag', 'pt-BR'), locale.whereAll('tag', 'pt-BR')[0])

// ILocale keeps the exact same fields
assert.deepEqual(
	Object.keys(locale.getByTag('pt-BR')),
	['name', 'local', 'location', 'tag', 'lcid', 'iso639-2', 'iso639-1']
)

console.log('Done!')
