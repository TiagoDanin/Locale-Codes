const locale = require('../dist/index')
const assert = require('assert')

assert.equal(locale.all.length > 20, true)
assert.equal(locale.getByTag('pt-br').name, 'Portuguese')
assert.equal(locale.getByTag('pt-br').local, 'Português')
assert.equal(locale.getByTag('js-best'), undefined)

// Issue #28 - tags shipped with a trailing "-" are normalized, but never in a
// way that makes an existing locale resolve to a different one.
// The truncated tags are not "missing one character": the real values are
// tzm-Latn-MA, ccp-Cakm-BD/ccp-Cakm-IN and ca-ES-valencia, so tzm-Latn and
// ca-ES belong to other locales and must keep pointing at them.
assert.equal(locale.getByTag('tzm-latn').tag, 'tzm-Latn')
assert.equal(locale.getByTag('tzm-latn').name, 'Tamazight (Latin)')
assert.equal(locale.getByTag('ca-es').tag, 'ca-ES')
assert.equal(locale.getByTag('ca-es').name, 'Catalan')
assert.equal(locale.getByTag('ca-es').lcid, 1027)

// Every locale must be reachable by its own tag - normalization never merges
// two distinct entries into one.
assert.equal(
	locale.all.every(item => {
		const found = locale.getByTag(item.tag)
		return found !== undefined && found.tag.toLowerCase() === item.tag.toLowerCase()
	}),
	true
)

// A tag may only keep a trailing "-" when stripping it would collide with a
// different locale. Anything else is an unnormalized value.
assert.equal(
	locale.all
		.filter(item => item.tag.endsWith('-'))
		.every(item => locale.getByTag(item.tag.replace(/-+$/, '')) !== undefined),
	true
)

assert.equal(locale.all.every(item => typeof item.tag === 'string' && item.tag !== ''), true)
assert.equal(locale.all.every(item => typeof item.lcid === 'number'), true)
assert.equal(locale.all.every(item => typeof item.name === 'string'), true)

// Absent fields are null - not undefined - so the serialized shape documented
// in the README is preserved
const aghem = locale.getByTag('agq')
assert.equal(aghem.local, null)
assert.equal(aghem.location, null)
assert.equal(aghem['iso639-2'], null)
assert.equal(aghem['iso639-1'], null)
assert.equal(
	JSON.stringify(aghem),
	'{"name":"Aghem","local":null,"location":null,"tag":"agq","lcid":4096,"iso639-2":null,"iso639-1":null}'
)

// LCID lookups accept a numeric string but never a partially numeric one
assert.equal(locale.getByLCID('1046').tag, 'pt-BR')
assert.equal(locale.where('lcid', '1046abc'), undefined)
assert.equal(locale.where('lcid', ''), undefined)

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
