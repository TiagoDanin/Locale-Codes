declare namespace localeCodes {
	interface ILocale {
		/**
		 * The name of the locale in English
		 */
		name: string;

		/**
		 * The name of the language/locale as recognised by those who use it
		 * e.g. Arabic becomes: العربية
		 */
		local?: string;

		/**
		 * A textual name of the geographic location in which this
		 * locale/language is generally utilised
		 */
		location?: string;

		/**
		 * Tag for the locale - e.g. English (UK) becomes: en-GB
		 * Provided by LCID
		 */
		tag: string;

		/**
		 * Windows LCID decimal identifier for a locale
		 * e.g. English (UK) becomes: 2057
		 */
		lcid: number;

		/**
		 * Three-letter ISO 639-2 code for the given locale
		 * NOTE: Where differing codes appear in ISO 639-2/B and ISO 639-2/T,
		 * both are provided separated by a slash (B/T)
		 * e.g. Basque becomes: baq/eus
		 */
		'iso639-2'?: string;

		/**
		 * Two-letter ISO 639-1 code for the given locale
		 * e.g. English becomes: en
		 */
		'iso639-1'?: string;
	}
}

declare const localeCodes: {
	/**
	 * Array of every locale code available
	 */
	all: localeCodes.ILocale[];

	/**
	 * Searches for a locale according to the parameter and value given
	 * @param key Parameter to search - name, tag, etc (see ILocale)
	 * @param text The value to search for
	 */
	where: (key?: string, text?: string) => localeCodes.ILocale;

	/**
	 * Searches for a locale according to the English name given
	 * @param text English name of the locale to find
	 */
	getByName: (text: string) => localeCodes.ILocale;

	/**
	 * Searches for a locale according to its localised name
	 * @param text Localised name of the locale to find
	 */
	getByNameLocal: (text: string) => localeCodes.ILocale;

	/**
	 * Searches for a locale according to its geographic location
	 * @param text Locale's geographic location - e.g. "Spain"
	 */
	getByLocation: (text: string) => localeCodes.ILocale;

	/**
	 * Searches for a locale according to its tag
	 * @param text Locale tag - e.g. "en-GB"
	 */
	getByTag: (text: string) => localeCodes.ILocale;

	/**
	 * Searches for a locale according to its Window LCID decimal code
	 * @param id LCID decimal code - e.g. 2057
	 */
	getByLCID: (id: number) => localeCodes.ILocale;

	/**
	 * Searches for a locale according to its three-character ISO 639-2 code
	 * @param text ISO 639-2 code - e.g. "eng"
	 */
	getByISO6392: (text: string) => localeCodes.ILocale;

	/**
	 * Searches for a locale according to its two-character ISO 639-1 code
	 * @param text ISO 639-1 code - e.g. "en"
	 */
	getByISO6391: (text: string) => localeCodes.ILocale;
}

export = localeCodes
