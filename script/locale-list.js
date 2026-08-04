// Generates the "### Locale List" markdown table used in README.md
// Usage (after `yarn build`): node script/locale-list.js
const locale = require('../dist/index')

const columns = ['Name', 'Local', 'Location', 'Tag', 'LCID', 'ISO 639-2 ID', 'ISO 639-1 ID']
const separator = ['----', '-----', '--------', '---', '----', '------------', '------------']

const cell = value => (value === null || value === undefined ? 'null' : `${value}`)

const row = values => `${values.join(' | ')} |`

console.log(row(columns))
console.log(separator.join(' | '))

locale.all.forEach(item => {
	console.log(row([
		cell(item.name),
		cell(item.local),
		cell(item.location),
		cell(item.tag),
		cell(item.lcid),
		cell(item['iso639-2']),
		cell(item['iso639-1'])
	]))
})
