const locale = require('.')
const assert = require('assert')

assert.equal(locale.all.length > 20, true)
assert.equal(locale.getByTag('pt-br').name, 'Portuguese')
assert.equal(locale.getByTag('js-best'), undefined)

console.log('Done!')
