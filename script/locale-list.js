const locale = require('..')

locale.all.map(locale => {
	console.log(
		locale.name, '|',
		locale.local, '|',
		locale.location, '|',
		locale.tag, '|',
		locale.lcid, '|',
		locale['iso639-2'], '|',
		locale['iso639-1'], '|'
	)
})
