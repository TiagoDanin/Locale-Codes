const locale = require('..')

locale.all.map((l) => {
	console.log(l.name, '|', l.location, '|', l.tag, '|', l.lcid, '|', l['iso639-2'], '|', l['iso639-1'], '|')
})
