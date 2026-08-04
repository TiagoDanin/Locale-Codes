export interface ILocale {
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

export interface LocaleCodes {
	/**
	 * Array of every locale code available
	 */
	all: ILocale[];

	/**
	 * Searches for the first locale matching the parameter and value given
	 * @param key Parameter to search - name, tag, etc (see ILocale)
	 * @param text The value to search for
	 * @returns The first matching locale, or undefined when there is no match
	 */
	where: (key?: keyof ILocale, text?: string | number) => ILocale | undefined;

	/**
	 * Searches for every locale matching the parameter and value given
	 * @param key Parameter to search - name, tag, etc (see ILocale)
	 * @param text The value to search for
	 * @returns All matching locales, or an empty array when there is no match
	 */
	whereAll: (key?: keyof ILocale, text?: string | number) => ILocale[];

	/**
	 * Searches for a locale according to the English name given
	 * @param text English name of the locale to find
	 */
	getByName: (text: string) => ILocale | undefined;

	/**
	 * Searches for a locale according to its localised name
	 * @param text Localised name of the locale to find
	 */
	getByNameLocal: (text: string) => ILocale | undefined;

	/**
	 * Searches for a locale according to its geographic location
	 * @param text Locale's geographic location - e.g. "Spain"
	 */
	getByLocation: (text: string) => ILocale | undefined;

	/**
	 * Searches for a locale according to its tag
	 * @param text Locale tag - e.g. "en-GB"
	 */
	getByTag: (text: string) => ILocale | undefined;

	/**
	 * Searches for a locale according to its Window LCID decimal code
	 * @param id LCID decimal code - e.g. 2057
	 */
	getByLCID: (id: number) => ILocale | undefined;

	/**
	 * Searches for a locale according to its three-character ISO 639-2 code
	 * @param text ISO 639-2 code - e.g. "eng"
	 */
	getByISO6392: (text: string) => ILocale | undefined;

	/**
	 * Searches for a locale according to its two-character ISO 639-1 code
	 * @param text ISO 639-1 code - e.g. "en"
	 */
	getByISO6391: (text: string) => ILocale | undefined;

	/**
	 * Searches for every locale matching the English name given
	 * @param text English name of the locales to find
	 * @returns All matching locales, or an empty array when there is no match
	 */
	getAllByName: (text: string) => ILocale[];

	/**
	 * Searches for every locale matching the localised name given
	 * @param text Localised name of the locales to find
	 * @returns All matching locales, or an empty array when there is no match
	 */
	getAllByNameLocal: (text: string) => ILocale[];

	/**
	 * Searches for every locale matching the geographic location given
	 * @param text Locale's geographic location - e.g. "Spain"
	 * @returns All matching locales, or an empty array when there is no match
	 */
	getAllByLocation: (text: string) => ILocale[];

	/**
	 * Searches for every locale matching the tag given
	 * @param text Locale tag - e.g. "en-GB"
	 * @returns All matching locales, or an empty array when there is no match
	 */
	getAllByTag: (text: string) => ILocale[];

	/**
	 * Searches for every locale matching the Windows LCID decimal code given
	 * @param id LCID decimal code - e.g. 2057
	 * @returns All matching locales, or an empty array when there is no match
	 */
	getAllByLCID: (id: number) => ILocale[];

	/**
	 * Searches for every locale matching the three-character ISO 639-2 code given
	 * @param text ISO 639-2 code - e.g. "eng"
	 * @returns All matching locales, or an empty array when there is no match
	 */
	getAllByISO6392: (text: string) => ILocale[];

	/**
	 * Searches for every locale matching the two-character ISO 639-1 code given
	 * @param text ISO 639-1 code - e.g. "en"
	 * @returns All matching locales - e.g. en-US, en-GB, ... - or an empty
	 * array when there is no match
	 */
	getAllByISO6391: (text: string) => ILocale[];
}