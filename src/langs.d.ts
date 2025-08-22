declare module 'langs' {
	interface LangEntry {
		'1'?: string
		'2T'?: string
		'2B'?: string
		'3'?: string
		name?: string
		local?: string
		names?: string[]
		'iso639-1'?: string | null
		'iso639-2'?: string
	}

	export function all(): LangEntry[]
}