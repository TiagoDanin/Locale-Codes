# Locale Codes

[![Travis](https://img.shields.io/travis/TiagoDanin/Locale-Codes.svg?branch=master&style=flat-square)](https://travis-ci.org/TiagoDanin/Locale-Codes) [![Downloads](https://img.shields.io/npm/dt/locale-codes.svg?style=flat-square)](https://npmjs.org/package/locale-codes) [![Node](https://img.shields.io/node/v/locale-codes.svg?style=flat-square)](https://npmjs.org/package/locale-codes) [![Version](https://img.shields.io/npm/v/locale-codes.svg?style=flat-square)](https://npmjs.org/package/locale-codes) [![XO code style](https://img.shields.io/badge/code%20style-XO-red.svg?style=flat-square)](https://github.com/xojs/xo) 

 Language codes & country codes

## Installation

Module available through the [npm registry](https://www.npmjs.com/). It can be installed using the [`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally) or [`yarn`](https://yarnpkg.com/en/) command line tool.

```sh
# Yarn (Recomend)
yarn add locale-codes
# NPM 
npm install locale-codes --save
```

## Examples

### JavaScript

```js
/* eslint-disable no-unused-expressions */
const locale = require('locale-codes')

locale.all // [language: '...']
locale.getByTag('pt-br').name // 'Portuguese'
locale.where('tag', 'pt-br').name // 'Portuguese'
```

### TypeScript

```ts
/* eslint-disable @typescript-eslint/no-unused-expressions, @typescript-eslint/no-unused-vars */
import * as locale from 'locale-codes'
import {ILocale} from '.'

locale.all // [language: '...']
const localeSelect: ILocale = locale.all[0]

locale.getByTag('pt-br').name // 'Portuguese'
locale.where('tag', 'pt-br').name // 'Portuguese'
```

## Documentation

### API

#### `locale.all`
All languages

#### `locale.where(key, text)`
Get information

- `name` - Language name (String)
- `name` - Language name local (String || Null) 
- `location` - Location country (String || Null)
- `tag` - LCID tag (String)
- `lcid` - LCID id (Number)
- `iso639-2` - ISO 639-2 id (String)
- `iso639-1` - ISO 639-1 id (String || Null)

#### Shortcuts
- `getByName(text)` = `where('name', text)`
- `getByNameLocal(text)` = `where('local', text)`
- `getByLocation`(text) = `where('location', text)`
- `getByTag(text)` = `where('tag', text)`
- `getByLCID(lcid)` = `where('lcid', id)`
- `getByISO6392(text)` = `where('iso639-2', text)`
- `getByISO6391(text)` = `where('iso639-1', text)`

### Locale List

| Name | Local | Location | Tag | LCID | ISO 639-2 | ISO 639-1 |
|------|-------|----------|-----|------|------------|------------|
 Afar | Afaraf |  | aa | 4096 | aar | aa |
| Afar | Afaraf | Djibouti | aa-DJ | 4096 | aar | aa |
| Afar | Afaraf | Eritrea | aa-ER | 4096 | aar | aa |
| Afar | Afaraf | Ethiopia | aa-ET | 4096 | aar | aa |
| Afrikaans | Afrikaans |  | af | 54 | afr | af |
| Afrikaans | Afrikaans | Namibia | af-NA | 4096 | afr | af |
| Afrikaans | Afrikaans | South Africa | af-ZA | 1078 | afr | af |
| Aghem |  |  | agq | 4096 |  |  |
| Aghem |  | Cameroon | agq-CM | 4096 |  |  |
| Akan | Akan |  | ak | 4096 | aka | ak |
| Akan | Akan | Ghana | ak-GH | 4096 | aka | ak |
| Albanian |  |  | sq | 28 | alb/sqi | sq |
| Albanian |  | Albania | sq-AL | 1052 | alb/sqi | sq |
| Albanian |  | North Macedonia | sq-MK | 4096 | alb/sqi | sq |
| Alsatian |  |  | gsw | 132 | gsw |  |
| Alsatian |  | France | gsw-FR | 1156 | gsw |  |
| Alsatian |  | Liechtenstein | gsw-LI | 4096 | gsw |  |
| Alsatian |  | Switzerland | gsw-CH | 4096 | gsw |  |
| Amharic | አማርኛ |  | am | 94 | amh | am |
| Amharic | አማርኛ | Ethiopia | am-ET | 1118 | amh | am |
| Arabic | العربية |  | ar | 1 | ara | ar |
| Arabic | العربية | Algeria | ar-DZ | 5121 | ara | ar |
| Arabic | العربية | Bahrain | ar-BH | 15361 | ara | ar |
| Arabic | العربية | Chad | ar-TD | 4096 | ara | ar |
| Arabic | العربية | Comoros | ar-KM | 4096 | ara | ar |
| Arabic | العربية | Djibouti | ar-DJ | 4096 | ara | ar |
| Arabic | العربية | Egypt | ar-EG | 3073 | ara | ar |
| Arabic | العربية | Eritrea | ar-ER | 4096 | ara | ar |
| Arabic | العربية | Iraq | ar-IQ | 2049 | ara | ar |
| Arabic | العربية | Israel | ar-IL | 4096 | ara | ar |
| Arabic | العربية | Jordan | ar-JO | 11265 | ara | ar |
| Arabic | العربية | Kuwait | ar-KW | 13313 | ara | ar |
| Arabic | العربية | Lebanon | ar-LB | 12289 | ara | ar |
| Arabic | العربية | Libya | ar-LY | 4097 | ara | ar |
| Arabic | العربية | Mauritania | ar-MR | 4096 | ara | ar |
| Arabic | العربية | Morocco | ar-MA | 6145 | ara | ar |
| Arabic | العربية | Oman | ar-OM | 8193 | ara | ar |
| Arabic | العربية | Palestinian Authority | ar-PS | 4096 | ara | ar |
| Arabic | العربية | Qatar | ar-QA | 16385 | ara | ar |
| Arabic | العربية | Saudi Arabia | ar-SA | 1025 | ara | ar |
| Arabic | العربية | Somalia | ar-SO | 4096 | ara | ar |
| Arabic | العربية | South Sudan | ar-SS | 4096 | ara | ar |
| Arabic | العربية | Sudan | ar-SD | 4096 | ara | ar |
| Arabic | العربية | Syria | ar-SY | 10241 | ara | ar |
| Arabic | العربية | Tunisia | ar-TN | 7169 | ara | ar |
| Arabic | العربية | U.A.E. | ar-AE | 14337 | ara | ar |
| Arabic | العربية | World | ar-001 | 4096 | ara | ar |
| Arabic | العربية | Yemen | ar-YE | 9217 | ara | ar |
| Armenian |  |  | hy | 43 | arm/hye | hy |
| Armenian |  | Armenia | hy-AM | 1067 | arm/hye | hy |
| Assamese | অসমীয়া |  | as | 77 | asm | as |
| Assamese | অসমীয়া | India | as-IN | 1101 | asm | as |
| Asturian |  |  | ast | 4096 | ast |  |
| Asturian |  | Spain | ast-ES | 4096 | ast |  |
| Asu |  |  | asa | 4096 |  |  |
| Asu |  | Tanzania | asa-TZ | 4096 |  |  |
| Azerbaijani (Cyrillic) |  |  | az-Cyrl | 29740 |  |  |
| Azerbaijani (Cyrillic) |  | Azerbaijan | az-Cyrl-AZ | 2092 |  |  |
| Azerbaijani (Latin) |  |  | az | 44 |  |  |
| Azerbaijani (Latin) |  |  | az-Latn | 30764 |  |  |
| Azerbaijani (Latin) |  | Azerbaijan | az-Latn-AZ | 1068 |  |  |
| Bafia |  |  | ksf | 4096 |  |  |
| Bafia |  | Cameroon | ksf-CM | 4096 |  |  |
| Bamanankan |  |  | bm | 4096 |  |  |
| Bamanankan (Latin) |  | Mali | bm-Latn-ML | 4096 |  |  |
| Bangla |  |  | bn | 69 |  |  |
| Bangla |  | Bangladesh | bn-BD | 2117 |  |  |
| Bangla |  | India | bn-IN | 1093 |  |  |
| Basaa |  |  | bas | 4096 |  |  |
| Basaa |  | Cameroon | bas-CM | 4096 |  |  |
| Bashkir | Башҡортса |  | ba | 109 | bak | ba |
| Bashkir | Башҡортса | Russia | ba-RU | 1133 | bak | ba |
| Basque |  |  | eu | 45 | baq/eus | eu |
| Basque |  | Spain | eu-ES | 1069 | baq/eus | eu |
| Belarusian | Беларуская |  | be | 35 | bel | be |
| Belarusian | Беларуская | Belarus | be-BY | 1059 | bel | be |
| Bemba |  |  | bem | 4096 | bem |  |
| Bemba |  | Zambia | bem-ZM | 4096 | bem |  |
| Bena |  |  | bez | 4096 |  |  |
| Bena |  | Tanzania | bez-TZ | 4096 |  |  |
| Blin |  |  | byn | 4096 | byn |  |
| Blin |  | Eritrea | byn-ER | 4096 | byn |  |
| Bodo |  |  | brx | 4096 |  |  |
| Bodo |  | India | brx-IN | 4096 |  |  |
| Bosnian (Cyrillic) |  |  | bs-Cyrl | 25626 |  |  |
| Bosnian (Cyrillic) |  | Bosnia and Herzegovina | bs-Cyrl-BA | 8218 |  |  |
| Bosnian (Latin) |  |  | bs-Latn | 26650 |  |  |
| Bosnian (Latin) |  |  | bs | 30746 |  |  |
| Bosnian (Latin) |  | Bosnia and Herzegovina | bs-Latn-BA | 5146 |  |  |
| Breton | Brezhoneg |  | br | 126 | bre | br |
| Breton | Brezhoneg | France | br-FR | 1150 | bre | br |
| Bulgarian | Български |  | bg | 2 | bul | bg |
| Bulgarian | Български | Bulgaria | bg-BG | 1026 | bul | bg |
| Burmese |  |  | my | 85 | bur/mya | my |
| Burmese |  | Myanmar | my-MM | 1109 | bur/mya | my |
| Catalan | Català |  | ca | 3 | cat | ca |
| Catalan | Català | Andorra | ca-AD | 4096 | cat | ca |
| Catalan | Català | France | ca-FR | 4096 | cat | ca |
| Catalan | Català | Italy | ca-IT | 4096 | cat | ca |
| Catalan | Català | Spain | ca-ES | 1027 | cat | ca |
| Cebuano |  |  | ceb | 4096 | ceb |  |
| Cebuan (Latin) |  |  | ceb-Latn | 4096 |  |  |
| Cebuan (Latin) |  | Philippines | ceb-Latn-PH | 4096 |  |  |
| Central Atlas Tamazight (Latin) |  | Morocco | tzm-Latn- | 4096 |  |  |
| Central Kurdish |  |  | ku | 146 |  |  |
| Central Kurdish |  |  | ku-Arab | 31890 |  |  |
| Central Kurdish |  | Iraq | ku-Arab-IQ | 1170 |  |  |
| Chakma |  |  | ccp | 4096 |  |  |
| Chakma |  | Chakma | ccp-Cakm | 4096 |  |  |
| Chakma |  | India | ccp-Cakm- | 4096 |  |  |
| Chechen | Нохчийн | Russia | cd-RU | 4096 | che | ce |
| Cherokee |  |  | chr | 92 | chr |  |
| Cherokee |  |  | chr-Cher | 31836 | chr |  |
| Cherokee |  | United States | chr-Cher-US | 1116 | chr |  |
| Chiga |  |  | cgg | 4096 |  |  |
| Chiga |  | Uganda | cgg-UG | 4096 |  |  |
| Chinese (Simplified) |  |  | zh-Hans | 4 |  |  |
| Chinese (Simplified) |  |  | zh | 30724 |  |  |
| Chinese (Simplified) |  | People's Republic of China | zh-CN | 2052 |  |  |
| Chinese (Simplified) |  | Singapore | zh-SG | 4100 |  |  |
| Chinese (Traditional) |  |  | zh-Hant | 31748 |  |  |
| Chinese (Traditional) |  | Hong Kong S.A.R. | zh-HK | 3076 |  |  |
| Chinese (Traditional) |  | Macao S.A.R. | zh-MO | 5124 |  |  |
| Chinese (Traditional) |  | Taiwan | zh-TW | 1028 |  |  |
| Church Slavic | Словѣ́ньскъ | Russia | cu-RU | 4096 | chu | cu |
| Congo Swahili |  |  | swc | 4096 |  |  |
| Congo Swahili |  | Congo DRC | swc-CD | 4096 |  |  |
| Cornish | Kernewek |  | kw | 4096 | cor | kw |
| Cornish | Kernewek | United Kingdom | kw-GB | 4096 | cor | kw |
| Corsican | Corsu |  | co | 131 | cos | co |
| Corsican | Corsu | France | co-FR | 1155 | cos | co |
| Croatian | Hrvatski |  | hr, | 26 | hrv | hr |
| Croatian | Hrvatski | Croatia | hr-HR | 1050 | hrv | hr |
| Croatian (Latin) |  | Bosnia and Herzegovina | hr-BA | 4122 |  |  |
| Czech |  |  | cs | 5 | cze/ces | cs |
| Czech |  | Czech Republic | cs-CZ | 1029 | cze/ces | cs |
| Danish | Dansk |  | da | 6 | dan | da |
| Danish | Dansk | Denmark | da-DK | 1030 | dan | da |
| Danish | Dansk | Greenland | da-GL | 4096 | dan | da |
| Dari |  |  | prs | 140 |  |  |
| Dari |  | Afghanistan | prs-AF | 1164 |  |  |
| Divehi | Divehi |  | dv | 101 | div | dv |
| Divehi | Divehi | Maldives | dv-MV | 1125 | div | dv |
| Duala |  |  | dua | 4096 | dua |  |
| Duala |  | Cameroon | dua-CM | 4096 | dua |  |
| Dutch |  |  | nl | 19 | dut/nld | nl |
| Dutch |  | Aruba | nl-AW | 4096 | dut/nld | nl |
| Dutch |  | Belgium | nl-BE | 2067 | dut/nld | nl |
| Dutch |  | Bonaire, Sint Eustatius and Saba | nl-BQ | 4096 | dut/nld | nl |
| Dutch |  | Curaçao | nl-CW | 4096 | dut/nld | nl |
| Dutch |  | Netherlands | nl-NL | 1043 | dut/nld | nl |
| Dutch |  | Sint Maarten | nl-SX | 4096 | dut/nld | nl |
| Dutch |  | Suriname | nl-SR | 4096 | dut/nld | nl |
| Dzongkha | རྫོང་ཁ |  | dz | 4096 | dzo | dz |
| Dzongkha | རྫོང་ཁ | Bhutan | dz-BT | 3153 | dzo | dz |
| Embu |  |  | ebu | 4096 |  |  |
| Embu |  | Kenya | ebu-KE | 4096 |  |  |
| English | English |  | en | 9 | eng | en |
| English | English | American Samoa | en-AS | 4096 | eng | en |
| English | English | Anguilla | en-AI | 4096 | eng | en |
| English | English | Antigua and Barbuda | en-AG | 4096 | eng | en |
| English | English | Australia | en-AU | 3081 | eng | en |
| English | English | Austria | en-AT | 4096 | eng | en |
| English | English | Bahamas | en-BS | 4096 | eng | en |
| English | English | Barbados | en-BB | 4096 | eng | en |
| English | English | Belgium | en-BE | 4096 | eng | en |
| English | English | Belize | en-BZ | 10249 | eng | en |
| English | English | Bermuda | en-BM | 4096 | eng | en |
| English | English | Botswana | en-BW | 4096 | eng | en |
| English | English | British Indian Ocean Territory | en-IO | 4096 | eng | en |
| English | English | British Virgin Islands | en-VG | 4096 | eng | en |
| English | English | Burundi | en-BI | 4096 | eng | en |
| English | English | Cameroon | en-CM | 4096 | eng | en |
| English | English | Canada | en-CA | 4105 | eng | en |
| English | English | Caribbean | en-029 | 9225 | eng | en |
| English | English | Cayman Islands | en-KY | 4096 | eng | en |
| English | English | Christmas Island | en-CX | 4096 | eng | en |
| English | English | Cocos [Keeling] Islands | en-CC | 4096 | eng | en |
| English | English | Cook Islands | en-CK | 4096 | eng | en |
| English | English | Cyprus | en-CY | 4096 | eng | en |
| English | English | Denmark | en-DK | 4096 | eng | en |
| English | English | Dominica | en-DM | 4096 | eng | en |
| English | English | Eritrea | en-ER | 4096 | eng | en |
| English | English | Europe | en-150 | 4096 | eng | en |
| English | English | Falkland Islands | en-FK | 4096 | eng | en |
| English | English | Finland | en-FI | 4096 | eng | en |
| English | English | Fiji | en-FJ | 4096 | eng | en |
| English | English | Gambia | en-GM | 4096 | eng | en |
| English | English | Germany | en-DE | 4096 | eng | en |
| English | English | Ghana | en-GH | 4096 | eng | en |
| English | English | Gibraltar | en-GI | 4096 | eng | en |
| English | English | Grenada | en-GD | 4096 | eng | en |
| English | English | Guam | en-GU | 4096 | eng | en |
| English | English | Guernsey | en-GG | 4096 | eng | en |
| English | English | Guyana | en-GY | 4096 | eng | en |
| English | English | Hong Kong | en-HK | 15369 | eng | en |
| English | English | India | en-IN | 16393 | eng | en |
| English | English | Ireland | en-IE | 6153 | eng | en |
| English | English | Isle of Man | en-IM | 4096 | eng | en |
| English | English | Israel | en-IL | 4096 | eng | en |
| English | English | Jamaica | en-JM | 8201 | eng | en |
| English | English | Jersey | en-JE | 4096 | eng | en |
| English | English | Kenya | en-KE | 4096 | eng | en |
| English | English | Kiribati | en-KI | 4096 | eng | en |
| English | English | Lesotho | en-LS | 4096 | eng | en |
| English | English | Liberia | en-LR | 4096 | eng | en |
| English | English | Macao SAR | en-MO | 4096 | eng | en |
| English | English | Madagascar | en-MG | 4096 | eng | en |
| English | English | Malawi | en-MW | 4096 | eng | en |
| English | English | Malaysia | en-MY | 17417 | eng | en |
| English | English | Malta | en-MT | 4096 | eng | en |
| English | English | Marshall Islands | en-MH | 4096 | eng | en |
| English | English | Mauritius | en-MU | 4096 | eng | en |
| English | English | Micronesia | en-FM | 4096 | eng | en |
| English | English | Montserrat | en-MS | 4096 | eng | en |
| English | English | Namibia | en-NA | 4096 | eng | en |
| English | English | Nauru | en-NR | 4096 | eng | en |
| English | English | Netherlands | en-NL | 4096 | eng | en |
| English | English | New Zealand | en-NZ | 5129 | eng | en |
| English | English | Nigeria | en-NG | 4096 | eng | en |
| English | English | Niue | en-NU | 4096 | eng | en |
| English | English | Norfolk Island | en-NF | 4096 | eng | en |
| English | English | Northern Mariana Islands | en-MP | 4096 | eng | en |
| English | English | Pakistan | en-PK | 4096 | eng | en |
| English | English | Palau | en-PW | 4096 | eng | en |
| English | English | Papua New Guinea | en-PG | 4096 | eng | en |
| English | English | Pitcairn Islands | en-PN | 4096 | eng | en |
| English | English | Puerto Rico | en-PR | 4096 | eng | en |
| English | English | Republic of the Philippines | en-PH | 13321 | eng | en |
| English | English | Rwanda | en-RW | 4096 | eng | en |
| English | English | Saint Kitts and Nevis | en-KN | 4096 | eng | en |
| English | English | Saint Lucia | en-LC | 4096 | eng | en |
| English | English | Saint Vincent and the Grenadines | en-VC | 4096 | eng | en |
| English | English | Samoa | en-WS | 4096 | eng | en |
| English | English | Seychelles | en-SC | 4096 | eng | en |
| English | English | Sierra Leone | en-SL | 4096 | eng | en |
| English | English | Singapore | en-SG | 18441 | eng | en |
| English | English | Sint Maarten | en-SX | 4096 | eng | en |
| English | English | Slovenia | en-SI | 4096 | eng | en |
| English | English | Solomon Islands | en-SB | 4096 | eng | en |
| English | English | South Africa | en-ZA | 7177 | eng | en |
| English | English | South Sudan | en-SS | 4096 | eng | en |
| English | English | St Helena, Ascension,  Tristan da Cunha | en-SH | 4096 | eng | en |
| English | English | Sudan | en-SD | 4096 | eng | en |
| English | English | Swaziland | en-SZ | 4096 | eng | en |
| English | English | Sweden | en-SE | 4096 | eng | en |
| English | English | Switzerland | en-CH | 4096 | eng | en |
| English | English | Tanzania | en-TZ | 4096 | eng | en |
| English | English | Tokelau | en-TK | 4096 | eng | en |
| English | English | Tonga | en-TO | 4096 | eng | en |
| English | English | Trinidad and Tobago | en-TT | 11273 | eng | en |
| English | English | Turks and Caicos Islands | en-TC | 4096 | eng | en |
| English | English | Tuvalu | en-TV | 4096 | eng | en |
| English | English | Uganda | en-UG | 4096 | eng | en |
| English | English | United Arab Emirates | en-AE | 19465 | eng | en |
| English | English | United Kingdom | en-GB | 2057 | eng | en |
| English | English | United States | en-US | 1033 | eng | en |
| English | English | US Minor Outlying Islands | en-UM | 4096 | eng | en |
| English | English | US Virgin Islands | en-VI | 4096 | eng | en |
| English | English | Vanuatu | en-VU | 4096 | eng | en |
| English | English | World | en-001 | 4096 | eng | en |
| English | English | Zambia | en-ZM | 4096 | eng | en |
| English | English | Zimbabwe | en-ZW | 12297 | eng | en |
| Esperanto | Esperanto |  | eo | 4096 | epo | eo |
| Esperanto | Esperanto | World | eo-001 | 4096 | epo | eo |
| Estonian | Eesti |  | et | 37 | est | et |
| Estonian | Eesti | Estonia | et-EE | 1061 | est | et |
| Ewe | Eʋegbe |  | ee | 4096 | ewe | ee |
| Ewe | Eʋegbe | Ghana | ee-GH | 4096 | ewe | ee |
| Ewe | Eʋegbe | Togo | ee-TG | 4096 | ewe | ee |
| Ewondo |  |  | ewo | 4096 | ewo |  |
| Ewondo |  | Cameroon | ewo-CM | 4096 | ewo |  |
| Faroese | Føroyskt |  | fo | 56 | fao | fo |
| Faroese | Føroyskt | Denmark | fo-DK | 4096 | fao | fo |
| Faroese | Føroyskt | Faroe Islands | fo-FO | 1080 | fao | fo |
| Filipino |  |  | fil | 100 | fil |  |
| Filipino |  | Philippines | fil-PH | 1124 | fil |  |
| Finnish | Suomi |  | fi | 11 | fin | fi |
| Finnish | Suomi | Finland | fi-FI | 1035 | fin | fi |
| French |  |  | fr | 12 | fre/fra | fr |
| French |  | Algeria | fr-DZ | 4096 | fre/fra | fr |
| French |  | Belgium | fr-BE | 2060 | fre/fra | fr |
| French |  | Benin | fr-BJ | 4096 | fre/fra | fr |
| French |  | Burkina Faso | fr-BF | 4096 | fre/fra | fr |
| French |  | Burundi | fr-BI | 4096 | fre/fra | fr |
| French |  | Cameroon | fr-CM | 11276 | fre/fra | fr |
| French |  | Canada | fr-CA | 3084 | fre/fra | fr |
| French |  | Central African Republic | fr-CF | 4096 | fre/fra | fr |
| French |  | Chad | fr-TD | 4096 | fre/fra | fr |
| French |  | Comoros | fr-KM | 4096 | fre/fra | fr |
| French |  | Congo | fr-CG | 4096 | fre/fra | fr |
| French |  | Congo, DRC | fr-CD | 9228 | fre/fra | fr |
| French |  | Côte d'Ivoire | fr-CI | 12300 | fre/fra | fr |
| French |  | Djibouti | fr-DJ | 4096 | fre/fra | fr |
| French |  | Equatorial Guinea | fr-GQ | 4096 | fre/fra | fr |
| French |  | France | fr-FR | 1036 | fre/fra | fr |
| French |  | French Guiana | fr-GF | 4096 | fre/fra | fr |
| French |  | French Polynesia | fr-PF | 4096 | fre/fra | fr |
| French |  | Gabon | fr-GA | 4096 | fre/fra | fr |
| French |  | Guadeloupe | fr-GP | 4096 | fre/fra | fr |
| French |  | Guinea | fr-GN | 4096 | fre/fra | fr |
| French |  | Haiti | fr-HT | 15372 | fre/fra | fr |
| French |  | Luxembourg | fr-LU | 5132 | fre/fra | fr |
| French |  | Madagascar | fr-MG | 4096 | fre/fra | fr |
| French |  | Mali | fr-ML | 13324 | fre/fra | fr |
| French |  | Martinique | fr-MQ | 4096 | fre/fra | fr |
| French |  | Mauritania | fr-MR | 4096 | fre/fra | fr |
| French |  | Mauritius | fr-MU | 4096 | fre/fra | fr |
| French |  | Mayotte | fr-YT | 4096 | fre/fra | fr |
| French |  | Morocco | fr-MA | 14348 | fre/fra | fr |
| French |  | New Caledonia | fr-NC | 4096 | fre/fra | fr |
| French |  | Niger | fr-NE | 4096 | fre/fra | fr |
| French |  | Principality of Monaco | fr-MC | 6156 | fre/fra | fr |
| French |  | Reunion | fr-RE | 8204 | fre/fra | fr |
| French |  | Rwanda | fr-RW | 4096 | fre/fra | fr |
| French |  | Saint Barthélemy | fr-BL | 4096 | fre/fra | fr |
| French |  | Saint Martin | fr-MF | 4096 | fre/fra | fr |
| French |  | Saint Pierre and Miquelon | fr-PM | 4096 | fre/fra | fr |
| French |  | Senegal | fr-SN | 10252 | fre/fra | fr |
| French |  | Seychelles | fr-SC | 4096 | fre/fra | fr |
| French |  | Switzerland | fr-CH | 4108 | fre/fra | fr |
| French |  | Syria | fr-SY | 4096 | fre/fra | fr |
| French |  | Togo | fr-TG | 4096 | fre/fra | fr |
| French |  | Tunisia | fr-TN | 4096 | fre/fra | fr |
| French |  | Vanuatu | fr-VU | 4096 | fre/fra | fr |
| French |  | Wallis and Futuna | fr-WF | 4096 | fre/fra | fr |
| Frisian |  |  | fy | 98 |  |  |
| Frisian |  | Netherlands | fy-NL | 1122 |  |  |
| Friulian |  |  | fur | 4096 | fur |  |
| Friulian |  | Italy | fur-IT | 4096 | fur |  |
| Fulah | Fulfulde |  | ff | 103 | ful | ff |
| Fulah (Latin) |  |  | ff-Latn | 31847 |  |  |
| Fulah (Latin) |  | Burkina Faso | ff-Latn-BF | 4096 |  |  |
| Fulah | Fulfulde | Cameroon | ff-CM | 4096 | ful | ff |
| Fulah (Latin) |  | Cameroon | ff-Latn-CM | 4096 |  |  |
| Fulah (Latin) |  | Gambia | ff-Latn-GM | 4096 |  |  |
| Fulah (Latin) |  | Ghana | ff-Latn-GH | 4096 |  |  |
| Fulah | Fulfulde | Guinea | ff-GN | 4096 | ful | ff |
| Fulah (Latin) |  | Guinea | ff-Latn-GN | 4096 |  |  |
| Fulah (Latin) |  | Guinea-Bissau | ff-Latn-GW | 4096 |  |  |
| Fulah (Latin) |  | Liberia | ff-Latn-LR | 4096 |  |  |
| Fulah | Fulfulde | Mauritania | ff-MR | 4096 | ful | ff |
| Fulah (Latin) |  | Mauritania | ff-Latn-MR | 4096 |  |  |
| Fulah (Latin) |  | Niger | ff-Latn-NE | 4096 |  |  |
| Fulah | Fulfulde | Nigeria | ff-NG | 4096 | ful | ff |
| Fulah (Latin) |  | Nigeria | ff-Latn-NG | 4096 |  |  |
| Fulah | Fulfulde | Senegal | ff-Latn-SN | 2151 | ful | ff |
| Fulah (Latin) |  | Sierra Leone | ff-Latn-SL | 4096 |  |  |
| Galician | Galego |  | gl | 86 | glg | gl |
| Galician | Galego | Spain | gl-ES | 1110 | glg | gl |
| Ganda | Luganda |  | lg | 4096 | lug | lg |
| Ganda | Luganda | Uganda | lg-UG | 4096 | lug | lg |
| Georgian |  |  | ka | 55 | geo/kat | ka |
| Georgian |  | Georgia | ka-GE | 1079 | geo/kat | ka |
| German |  |  | de | 7 | ger/deu | de |
| German |  | Austria | de-AT | 3079 | ger/deu | de |
| German |  | Belgium | de-BE | 4096 | ger/deu | de |
| German |  | Germany | de-DE | 1031 | ger/deu | de |
| German |  | Italy | de-IT | 4096 | ger/deu | de |
| German |  | Liechtenstein | de-LI | 5127 | ger/deu | de |
| German |  | Luxembourg | de-LU | 4103 | ger/deu | de |
| German |  | Switzerland | de-CH | 2055 | ger/deu | de |
| Greek |  |  | el | 8 |  |  |
| Greek |  | Cyprus | el-CY | 4096 |  |  |
| Greek |  | Greece | el-GR | 1032 |  |  |
| Greenlandic | Kalaallisut |  | kl | 111 | kal | kl |
| Greenlandic | Kalaallisut | Greenland | kl-GL | 1135 | kal | kl |
| Guarani | Avañe'ẽ |  | gn | 116 | grn | gn |
| Guarani | Avañe'ẽ | Paraguay | gn-PY | 1140 | grn | gn |
| Gujarati | ગુજરાતી |  | gu | 71 | guj | gu |
| Gujarati | ગુજરાતી | India | gu-IN | 1095 | guj | gu |
| Gusii |  |  | guz | 4096 |  |  |
| Gusii |  | Kenya | guz-KE | 4096 |  |  |
| Hausa (Latin) |  |  | ha | 104 |  |  |
| Hausa (Latin) |  |  | ha-Latn | 31848 |  |  |
| Hausa (Latin) |  | Ghana | ha-Latn-GH | 4096 |  |  |
| Hausa (Latin) |  | Niger | ha-Latn-NE | 4096 |  |  |
| Hausa (Latin) |  | Nigeria | ha-Latn-NG | 1128 |  |  |
| Hawaiian |  |  | haw | 117 | haw |  |
| Hawaiian |  | United States | haw-US | 1141 | haw |  |
| Hebrew | עברית |  | he | 13 | heb | he |
| Hebrew | עברית | Israel | he-IL | 1037 | heb | he |
| Hindi | हिन्दी |  | hi | 57 | hin | hi |
| Hindi | हिन्दी | India | hi-IN | 1081 | hin | hi |
| Hungarian | Magyar |  | hu | 14 | hun | hu |
| Hungarian | Magyar | Hungary | hu-HU | 1038 | hun | hu |
| Icelandic |  |  | is | 15 | ice/isl | is |
| Icelandic |  | Iceland | is-IS | 1039 | ice/isl | is |
| Igbo | Igbo |  | ig | 112 | ibo | ig |
| Igbo | Igbo | Nigeria | ig-NG | 1136 | ibo | ig |
| Indonesian | Bahasa Indonesia |  | id | 33 | ind | id |
| Indonesian | Bahasa Indonesia | Indonesia | id-ID | 1057 | ind | id |
| Interlingua |  |  | ia | 4096 |  |  |
| Interlingua |  | France | ia-FR | 4096 |  |  |
| Interlingua |  | World | ia-001 | 4096 |  |  |
| Inuktitut (Latin) |  |  | iu | 93 |  |  |
| Inuktitut (Latin) |  |  | iu-Latn | 31837 |  |  |
| Inuktitut (Latin) |  | Canada | iu-Latn-CA | 2141 |  |  |
| Inuktitut (Syllabics) |  |  | iu-Cans | 30813 |  |  |
| Inuktitut (Syllabics) |  | Canada | iu-Cans-CA | 1117 |  |  |
| Irish | Gaeilge |  | ga | 60 | gle | ga |
| Irish | Gaeilge | Ireland | ga-IE | 2108 | gle | ga |
| Italian | Italiano |  | it | 16 | ita | it |
| Italian | Italiano | Italy | it-IT | 1040 | ita | it |
| Italian | Italiano | San Marino | it-SM | 4096 | ita | it |
| Italian | Italiano | Switzerland | it-CH | 2064 | ita | it |
| Italian | Italiano | Vatican City | it-VA | 4096 | ita | it |
| Japanese | 日本語 |  | ja | 17 | jpn | ja |
| Japanese | 日本語 | Japan | ja-JP | 1041 | jpn | ja |
| Javanese | Basa Jawa |  | jv | 4096 | jav | jv |
| Javanese | Basa Jawa | Latin | jv-Latn | 4096 | jav | jv |
| Javanese | Basa Jawa | Latin, Indonesia | jv-Latn-ID | 4096 | jav | jv |
| Jola-Fonyi |  |  | dyo | 4096 |  |  |
| Jola-Fonyi |  | Senegal | dyo-SN | 4096 |  |  |
| Kabuverdianu |  |  | kea | 4096 |  |  |
| Kabuverdianu |  | Cabo Verde | kea-CV | 4096 |  |  |
| Kabyle |  |  | kab | 4096 | kab |  |
| Kabyle |  | Algeria | kab-DZ | 4096 | kab |  |
| Kako |  |  | kkj | 4096 |  |  |
| Kako |  | Cameroon | kkj-CM | 4096 |  |  |
| Kalenjin |  |  | kln | 4096 |  |  |
| Kalenjin |  | Kenya | kln-KE | 4096 |  |  |
| Kamba |  |  | kam | 4096 | kam |  |
| Kamba |  | Kenya | kam-KE | 4096 | kam |  |
| Kannada | ಕನ್ನಡ |  | kn | 75 | kan | kn |
| Kannada | ಕನ್ನಡ | India | kn-IN | 1099 | kan | kn |
| Kashmiri | كشميري |  | ks | 96 | kas | ks |
| Kashmiri | كشميري | Perso-Arabic | ks-Arab | 1120 | kas | ks |
| Kashmiri | كشميري | Perso-Arabic | ks-Arab-IN | 4096 | kas | ks |
| Kazakh | Қазақша |  | kk | 63 | kaz | kk |
| Kazakh | Қазақша | Kazakhstan | kk-KZ | 1087 | kaz | kk |
| Khmer |  |  | km | 83 |  |  |
| Khmer |  | Cambodia | km-KH | 1107 |  |  |
| K'iche |  |  | quc | 134 |  |  |
| K'iche |  | Guatemala | quc-Latn-GT | 1158 |  |  |
| Kikuyu | Gĩkũyũ |  | ki | 4096 | kik | ki |
| Kikuyu | Gĩkũyũ | Kenya | ki-KE | 4096 | kik | ki |
| Kinyarwanda | Kinyarwanda |  | rw | 135 | kin | rw |
| Kinyarwanda | Kinyarwanda | Rwanda | rw-RW | 1159 | kin | rw |
| Kiswahili |  |  | sw | 65 |  |  |
| Kiswahili |  | Kenya | sw-KE | 1089 |  |  |
| Kiswahili |  | Tanzania | sw-TZ | 4096 |  |  |
| Kiswahili |  | Uganda | sw-UG | 4096 |  |  |
| Konkani |  |  | kok | 87 | kok |  |
| Konkani |  | India | kok-IN | 1111 | kok |  |
| Korean | 한국어 |  | ko | 18 | kor | ko |
| Korean | 한국어 | Korea | ko-KR | 1042 | kor | ko |
| Korean | 한국어 | North Korea | ko-KP | 4096 | kor | ko |
| Koyra Chiini |  |  | khq | 4096 |  |  |
| Koyra Chiini |  | Mali | khq-ML | 4096 |  |  |
| Koyraboro Senni |  |  | ses | 4096 |  |  |
| Koyraboro Senni |  | Mali | ses-ML | 4096 |  |  |
| Kwasio |  |  | nmg | 4096 |  |  |
| Kwasio |  | Cameroon | nmg-CM | 4096 |  |  |
| Kyrgyz | Кыргызча |  | ky | 64 | kir | ky |
| Kyrgyz | Кыргызча | Kyrgyzstan | ky-KG | 1088 | kir | ky |
| Kurdish | Kurdî | Perso-Arabic, Iran | ku-Arab-IR | 4096 | kur | ku |
| Lakota |  |  | lkt | 4096 |  |  |
| Lakota |  | United States | lkt-US | 4096 |  |  |
| Langi |  |  | lag | 4096 |  |  |
| Langi |  | Tanzania | lag-TZ | 4096 |  |  |
| Lao | ພາສາລາວ |  | lo | 84 | lao | lo |
| Lao | ພາສາລາວ | Lao P.D.R. | lo-LA | 1108 | lao | lo |
| Latvian | Latviešu |  | lv | 38 | lav | lv |
| Latvian | Latviešu | Latvia | lv-LV | 1062 | lav | lv |
| Lingala | Lingála |  | ln | 4096 | lin | ln |
| Lingala | Lingála | Angola | ln-AO | 4096 | lin | ln |
| Lingala | Lingála | Central African Republic | ln-CF | 4096 | lin | ln |
| Lingala | Lingála | Congo | ln-CG | 4096 | lin | ln |
| Lingala | Lingála | Congo DRC | ln-CD | 4096 | lin | ln |
| Lithuanian | Lietuvių |  | lt | 39 | lit | lt |
| Lithuanian | Lietuvių | Lithuania | lt-LT | 1063 | lit | lt |
| Low German |  |  | nds | 4096 | nds |  |
| Low German |  | Germany | nds-DE | 4096 | nds |  |
| Low German |  | Netherlands | nds-NL | 4096 | nds |  |
| Lower Sorbian |  |  | dsb | 31790 | dsb |  |
| Lower Sorbian |  | Germany | dsb-DE | 2094 | dsb |  |
| Luba-Katanga | Tshiluba |  | lu | 4096 | lub | lu |
| Luba-Katanga | Tshiluba | Congo DRC | lu-CD | 4096 | lub | lu |
| Luo |  |  | luo | 4096 |  |  |
| Luo |  | Kenya | luo-KE | 4096 |  |  |
| Luxembourgish | Lëtzebuergesch |  | lb | 110 | ltz | lb |
| Luxembourgish | Lëtzebuergesch | Luxembourg | lb-LU | 1134 | ltz | lb |
| Luyia |  |  | luy | 4096 |  |  |
| Luyia |  | Kenya | luy-KE | 4096 |  |  |
| Macedonian |  |  | mk | 47 | mac/mkd | mk |
| Macedonian |  | North Macedonia | mk-MK | 1071 | mac/mkd | mk |
| Machame |  |  | jmc | 4096 |  |  |
| Machame |  | Tanzania | jmc-TZ | 4096 |  |  |
| Makhuwa-Meetto |  |  | mgh | 4096 |  |  |
| Makhuwa-Meetto |  | Mozambique | mgh-MZ | 4096 |  |  |
| Makonde |  |  | kde | 4096 |  |  |
| Makonde |  | Tanzania | kde-TZ | 4096 |  |  |
| Malagasy | Malagasy |  | mg | 4096 | mlg | mg |
| Malagasy | Malagasy | Madagascar | mg-MG | 4096 | mlg | mg |
| Malay |  |  | ms | 62 | may/msa | ms |
| Malay |  | Brunei Darussalam | ms-BN | 2110 | may/msa | ms |
| Malay |  | Malaysia | ms-MY | 1086 | may/msa | ms |
| Malayalam | മലയാളം |  | ml | 76 | mal | ml |
| Malayalam | മലയാളം | India | ml-IN | 1100 | mal | ml |
| Maltese | Malti |  | mt | 58 | mlt | mt |
| Maltese | Malti | Malta | mt-MT | 1082 | mlt | mt |
| Manx | Gaelg |  | gv | 4096 | glv | gv |
| Manx | Gaelg | Isle of Man | gv-IM | 4096 | glv | gv |
| Maori |  |  | mi | 129 | mao/mri | mi |
| Maori |  | New Zealand | mi-NZ | 1153 | mao/mri | mi |
| Mapudungun |  |  | arn | 122 | arn |  |
| Mapudungun |  | Chile | arn-CL | 1146 | arn |  |
| Marathi | मराठी |  | mr | 78 | mar | mr |
| Marathi | मराठी | India | mr-IN | 1102 | mar | mr |
| Masai |  |  | mas | 4096 | mas |  |
| Masai |  | Kenya | mas-KE | 4096 | mas |  |
| Masai |  | Tanzania | mas-TZ | 4096 | mas |  |
| Mazanderani |  | Iran | mzn-IR | 4096 |  |  |
| Meru |  |  | mer | 4096 |  |  |
| Meru |  | Kenya | mer-KE | 4096 |  |  |
| Meta' |  |  | mgo | 4096 |  |  |
| Meta' |  | Cameroon | mgo-CM | 4096 |  |  |
| Mohawk |  |  | moh | 124 | moh |  |
| Mohawk |  | Canada | moh-CA | 1148 | moh |  |
| Mongolian (Cyrillic) |  |  | mn | 80 |  |  |
| Mongolian (Cyrillic) |  |  | mn-Cyrl | 30800 |  |  |
| Mongolian (Cyrillic) |  | Mongolia | mn-MN | 1104 |  |  |
| Mongolian (Traditional Mongolian) |  |  | mn-Mong | 31824 |  |  |
| Mongolian (Traditional Mongolian) |  | People's Republic of China | mn-Mong-CN | 2128 |  |  |
| Mongolian (Traditional Mongolian) |  | Mongolia | mn-Mong-MN | 3152 |  |  |
| Morisyen |  |  | mfe | 4096 |  |  |
| Morisyen |  | Mauritius | mfe-MU | 4096 |  |  |
| Mundang |  |  | mua | 4096 |  |  |
| Mundang |  | Cameroon | mua-CM | 4096 |  |  |
| N'ko |  |  | nqo | 4096 | nqo |  |
| N'ko |  | Guinea | nqo-GN | 4096 | nqo |  |
| Nama |  |  | naq | 4096 |  |  |
| Nama |  | Namibia | naq-NA | 4096 |  |  |
| Nepali | नेपाली |  | ne | 97 | nep | ne |
| Nepali | नेपाली | India | ne-IN | 2145 | nep | ne |
| Nepali | नेपाली | Nepal | ne-NP | 1121 | nep | ne |
| Ngiemboon |  |  | nnh | 4096 |  |  |
| Ngiemboon |  | Cameroon | nnh-CM | 4096 |  |  |
| Ngomba |  |  | jgo | 4096 |  |  |
| Ngomba |  | Cameroon | jgo-CM | 4096 |  |  |
| Northern Luri |  | Iraq | lrc-IQ | 4096 |  |  |
| Northern Luri |  | Iran | lrc-IR | 4096 |  |  |
| North Ndebele | isiNdebele |  | nd | 4096 | nde | nd |
| North Ndebele | isiNdebele | Zimbabwe | nd-ZW | 4096 | nde | nd |
| Norwegian (Bokmal) |  |  | no | 20 |  |  |
| Norwegian (Bokmal) |  |  | nb | 31764 |  |  |
| Norwegian (Bokmal) |  | Norway | nb-NO | 1044 |  |  |
| Norwegian (Nynorsk) |  |  | nn | 30740 |  |  |
| Norwegian (Nynorsk) |  | Norway | nn-NO | 2068 |  |  |
| Norwegian Bokmål | Norsk (Bokmål) | Svalbard and Jan Mayen | nb-SJ | 4096 | nob | nb |
| Nuer |  |  | nus | 4096 |  |  |
| Nuer |  | Sudan | nus-SD | 4096 |  |  |
| Nuer |  | South Sudan | nus-SS | 4096 |  |  |
| Nyankole |  |  | nyn | 4096 | nyn |  |
| Nyankole |  | Uganda | nyn-UG | 4096 | nyn |  |
| Occitan |  |  | oc | 130 |  |  |
| Occitan |  | France | oc-FR | 1154 |  |  |
| Odia |  |  | or | 72 |  |  |
| Odia |  | India | or-IN | 1096 |  |  |
| Oromo | Afaan Oromoo |  | om | 114 | orm | om |
| Oromo | Afaan Oromoo | Ethiopia | om-ET | 1138 | orm | om |
| Oromo | Afaan Oromoo | Kenya | om-KE | 4096 | orm | om |
| Ossetian | Ирон æвзаг |  | os | 4096 | oss | os |
| Ossetian | Ирон æвзаг | Cyrillic, Georgia | os-GE | 4096 | oss | os |
| Ossetian | Ирон æвзаг | Cyrillic, Russia | os-RU | 4096 | oss | os |
| Pashto | پښتو |  | ps | 99 | pus | ps |
| Pashto | پښتو | Afghanistan | ps-AF | 1123 | pus | ps |
| Pashto | پښتو | Pakistan | ps-PK | 4096 | pus | ps |
| Persian |  |  | fa | 41 | per/fas | fa |
| Persian |  | Afghanistan | fa-AF | 4096 | per/fas | fa |
| Persian |  | Iran | fa-IR | 1065 | per/fas | fa |
| Polish | Polski |  | pl | 21 | pol | pl |
| Polish | Polski | Poland | pl-PL | 1045 | pol | pl |
| Portuguese | Português |  | pt | 22 | por | pt |
| Portuguese | Português | Angola | pt-AO | 4096 | por | pt |
| Portuguese | Português | Brazil | pt-BR | 1046 | por | pt |
| Portuguese | Português | Cabo Verde | pt-CV | 4096 | por | pt |
| Portuguese | Português | Equatorial Guinea | pt-GQ | 4096 | por | pt |
| Portuguese | Português | Guinea-Bissau | pt-GW | 4096 | por | pt |
| Portuguese | Português | Luxembourg | pt-LU | 4096 | por | pt |
| Portuguese | Português | Macao SAR | pt-MO | 4096 | por | pt |
| Portuguese | Português | Mozambique | pt-MZ | 4096 | por | pt |
| Portuguese | Português | Portugal | pt-PT | 2070 | por | pt |
| Portuguese | Português | São Tomé and Príncipe | pt-ST | 4096 | por | pt |
| Portuguese | Português | Switzerland | pt-CH | 4096 | por | pt |
| Portuguese | Português | Timor-Leste | pt-TL | 4096 | por | pt |
| Prussian |  |  | prg-001 | 4096 |  |  |
| Pseudo Language |  | Pseudo locale for east Asian/complex script localization testing | qps-ploca | 1534 |  |  |
| Pseudo Language |  | Pseudo locale used for localization testing | qps-ploc | 1281 |  |  |
| Pseudo Language |  | Pseudo locale used for localization testing of mirrored locales | qps-plocm | 2559 |  |  |
| Punjabi | ਪੰਜਾਬੀ |  | pa | 70 | pan | pa |
| Punjabi | ਪੰਜਾਬੀ |  | pa-Arab | 31814 | pan | pa |
| Punjabi | ਪੰਜਾਬੀ | India | pa-IN | 1094 | pan | pa |
| Punjabi | ਪੰਜਾਬੀ | Islamic Republic of Pakistan | pa-Arab-PK | 2118 | pan | pa |
| Quechua | Runa Simi |  | quz | 107 | que | qu |
| Quechua | Runa Simi | Bolivia | quz-BO | 1131 | que | qu |
| Quechua | Runa Simi | Ecuador | quz-EC | 2155 | que | qu |
| Quechua | Runa Simi | Peru | quz-PE | 3179 | que | qu |
| Ripuarian |  |  | ksh | 4096 |  |  |
| Ripuarian |  | Germany | ksh-DE | 4096 |  |  |
| Romanian |  |  | ro | 24 | rum/ron | ro |
| Romanian |  | Moldova | ro-MD | 2072 | rum/ron | ro |
| Romanian |  | Romania | ro-RO | 1048 | rum/ron | ro |
| Romansh | Rumantsch |  | rm | 23 | roh | rm |
| Romansh | Rumantsch | Switzerland | rm-CH | 1047 | roh | rm |
| Rombo |  |  | rof | 4096 |  |  |
| Rombo |  | Tanzania | rof-TZ | 4096 |  |  |
| Rundi | Kirundi |  | rn | 4096 | run | rn |
| Rundi | Kirundi | Burundi | rn-BI | 4096 | run | rn |
| Russian | Русский |  | ru | 25 | rus | ru |
| Russian | Русский | Belarus | ru-BY | 4096 | rus | ru |
| Russian | Русский | Kazakhstan | ru-KZ | 4096 | rus | ru |
| Russian | Русский | Kyrgyzstan | ru-KG | 4096 | rus | ru |
| Russian | Русский | Moldova | ru-MD | 2073 | rus | ru |
| Russian | Русский | Russia | ru-RU | 1049 | rus | ru |
| Russian | Русский | Ukraine | ru-UA | 4096 | rus | ru |
| Rwa |  |  | rwk | 4096 |  |  |
| Rwa |  | Tanzania | rwk-TZ | 4096 |  |  |
| Saho |  |  | ssy | 4096 |  |  |
| Saho |  | Eritrea | ssy-ER | 4096 |  |  |
| Sakha |  |  | sah | 133 |  |  |
| Sakha |  | Russia | sah-RU | 1157 |  |  |
| Samburu |  |  | saq | 4096 |  |  |
| Samburu |  | Kenya | saq-KE | 4096 |  |  |
| Sami (Inari) |  |  | smn | 28731 |  |  |
| Sami (Inari) |  | Finland | smn-FI | 9275 |  |  |
| Sami (Lule) |  |  | smj | 31803 |  |  |
| Sami (Lule) |  | Norway | smj-NO | 4155 |  |  |
| Sami (Lule) |  | Sweden | smj-SE | 5179 |  |  |
| Sami (Northern) |  |  | se | 59 |  |  |
| Sami (Northern) |  | Finland | se-FI | 3131 |  |  |
| Sami (Northern) |  | Norway | se-NO | 1083 |  |  |
| Sami (Northern) |  | Sweden | se-SE | 2107 |  |  |
| Sami (Skolt) |  |  | sms | 29755 |  |  |
| Sami (Skolt) |  | Finland | sms-FI | 8251 |  |  |
| Sami (Southern) |  |  | sma | 30779 |  |  |
| Sami (Southern) |  | Norway | sma-NO | 6203 |  |  |
| Sami (Southern) |  | Sweden | sma-SE | 7227 |  |  |
| Sango | Sängö |  | sg | 4096 | sag | sg |
| Sango | Sängö | Central African Republic | sg-CF | 4096 | sag | sg |
| Sangu |  |  | sbp | 4096 |  |  |
| Sangu |  | Tanzania | sbp-TZ | 4096 |  |  |
| Sanskrit | संस्कृतम् |  | sa | 79 | san | sa |
| Sanskrit | संस्कृतम् | India | sa-IN | 1103 | san | sa |
| Scottish Gaelic | Gàidhlig |  | gd | 145 | gla | gd |
| Scottish Gaelic | Gàidhlig | United Kingdom | gd-GB | 1169 | gla | gd |
| Sena |  |  | seh | 4096 |  |  |
| Sena |  | Mozambique | seh-MZ | 4096 |  |  |
| Serbian (Cyrillic) |  |  | sr-Cyrl | 27674 |  |  |
| Serbian (Cyrillic) |  | Bosnia and Herzegovina | sr-Cyrl-BA | 7194 |  |  |
| Serbian (Cyrillic) |  | Montenegro | sr-Cyrl-ME | 12314 |  |  |
| Serbian (Cyrillic) |  | Serbia | sr-Cyrl-RS | 10266 |  |  |
| Serbian (Cyrillic) |  | Serbia and Montenegro (Former) | sr-Cyrl-CS | 3098 |  |  |
| Serbian (Latin) |  |  | sr-Latn | 28698 |  |  |
| Serbian (Latin) |  |  | sr | 31770 |  |  |
| Serbian (Latin) |  | Bosnia and Herzegovina | sr-Latn-BA | 6170 |  |  |
| Serbian (Latin) |  | Montenegro | sr-Latn-ME | 11290 |  |  |
| Serbian (Latin) |  | Serbia | sr-Latn-RS | 9242 |  |  |
| Serbian (Latin) |  | Serbia and Montenegro (Former) | sr-Latn-CS | 2074 |  |  |
| Sesotho sa Leboa |  |  | nso | 108 |  |  |
| Sesotho sa Leboa |  | South Africa | nso-ZA | 1132 |  |  |
| Setswana |  |  | tn | 50 |  |  |
| Setswana |  | Botswana | tn-BW | 2098 |  |  |
| Setswana |  | South Africa | tn-ZA | 1074 |  |  |
| Shambala |  |  | ksb | 4096 |  |  |
| Shambala |  | Tanzania | ksb-TZ | 4096 |  |  |
| Shona | ChiShona |  | sn | 4096 | sna | sn |
| Shona | ChiShona | Latin | sn-Latn | 4096 | sna | sn |
| Shona | ChiShona | Zimbabwe | sn-Latn-ZW | 4096 | sna | sn |
| Sindhi | سنڌي‎ |  | sd | 89 | snd | sd |
| Sindhi | سنڌي‎ |  | sd-Arab | 31833 | snd | sd |
| Sindhi | سنڌي‎ | Islamic Republic of Pakistan | sd-Arab-PK | 2137 | snd | sd |
| Sinhala | සිංහල |  | si | 91 | sin | si |
| Sinhala | සිංහල | Sri Lanka | si-LK | 1115 | sin | si |
| Slovak |  |  | sk | 27 | slo/slk | sk |
| Slovak |  | Slovakia | sk-SK | 1051 | slo/slk | sk |
| Slovenian | Slovenščina |  | sl | 36 | slv | sl |
| Slovenian | Slovenščina | Slovenia | sl-SI | 1060 | slv | sl |
| Soga |  |  | xog | 4096 |  |  |
| Soga |  | Uganda | xog-UG | 4096 |  |  |
| Somali | Soomaaliga |  | so | 119 | som | so |
| Somali | Soomaaliga | Djibouti | so-DJ | 4096 | som | so |
| Somali | Soomaaliga | Ethiopia | so-ET | 4096 | som | so |
| Somali | Soomaaliga | Kenya | so-KE | 4096 | som | so |
| Somali | Soomaaliga | Somalia | so-SO | 1143 | som | so |
| Sotho |  |  | st | 48 |  |  |
| Sotho |  | South Africa | st-ZA | 1072 |  |  |
| South Ndebele | isiNdebele |  | nr | 4096 | nbl | nr |
| South Ndebele | isiNdebele | South Africa | nr-ZA | 4096 | nbl | nr |
| Southern Sotho |  | Lesotho | st-LS | 4096 |  |  |
| Spanish | Español |  | es | 10 | spa | es |
| Spanish | Español | Argentina | es-AR | 11274 | spa | es |
| Spanish | Español | Belize | es-BZ | 4096 | spa | es |
| Spanish | Español | Bolivarian Republic of Venezuela | es-VE | 8202 | spa | es |
| Spanish | Español | Bolivia | es-BO | 16394 | spa | es |
| Spanish | Español | Brazil | es-BR | 4096 | spa | es |
| Spanish | Español | Chile | es-CL | 13322 | spa | es |
| Spanish | Español | Colombia | es-CO | 9226 | spa | es |
| Spanish | Español | Costa Rica | es-CR | 5130 | spa | es |
| Spanish | Español | Cuba | es-CU | 23562 | spa | es |
| Spanish | Español | Dominican Republic | es-DO | 7178 | spa | es |
| Spanish | Español | Ecuador | es-EC | 12298 | spa | es |
| Spanish | Español | El Salvador | es-SV | 17418 | spa | es |
| Spanish | Español | Equatorial Guinea | es-GQ | 4096 | spa | es |
| Spanish | Español | Guatemala | es-GT | 4106 | spa | es |
| Spanish | Español | Honduras | es-HN | 18442 | spa | es |
| Spanish | Español | Latin America | es-419 | 22538 | spa | es |
| Spanish | Español | Mexico | es-MX | 2058 | spa | es |
| Spanish | Español | Nicaragua | es-NI | 19466 | spa | es |
| Spanish | Español | Panama | es-PA | 6154 | spa | es |
| Spanish | Español | Paraguay | es-PY | 15370 | spa | es |
| Spanish | Español | Peru | es-PE | 10250 | spa | es |
| Spanish | Español | Philippines | es-PH | 4096 | spa | es |
| Spanish | Español | Puerto Rico | es-PR | 20490 | spa | es |
| Spanish | Español | Spain | es-ES_tradnl | 1034 | spa | es |
| Spanish | Español | Spain | es-ES | 3082 | spa | es |
| Spanish | Español | UnitedStates | es-US | 21514 | spa | es |
| Spanish | Español | Uruguay | es-UY | 14346 | spa | es |
| Standard Moroccan Tamazight |  |  | zgh | 4096 | zgh |  |
| Standard Moroccan Tamazight |  | Morocco | zgh-Tfng-MA | 4096 | zgh |  |
| Standard Moroccan Tamazight |  | Tifinagh | zgh-Tfng | 4096 | zgh |  |
| Swati | SiSwati |  | ss | 4096 | ssw | ss |
| Swati | SiSwati | South Africa | ss-ZA | 4096 | ssw | ss |
| Swati | SiSwati | Swaziland | ss-SZ | 4096 | ssw | ss |
| Swedish | Svenska |  | sv | 29 | swe | sv |
| Swedish | Svenska | Åland Islands | sv-AX | 4096 | swe | sv |
| Swedish | Svenska | Finland | sv-FI | 2077 | swe | sv |
| Swedish | Svenska | Sweden | sv-SE | 1053 | swe | sv |
| Syriac |  |  | syr | 90 | syr |  |
| Syriac |  | Syria | syr-SY | 1114 | syr |  |
| Tachelhit |  |  | shi | 4096 |  |  |
| Tachelhit |  | Tifinagh | shi-Tfng | 4096 |  |  |
| Tachelhit |  | Tifinagh, Morocco | shi-Tfng-MA | 4096 |  |  |
| Tachelhit (Latin) |  |  | shi-Latn | 4096 |  |  |
| Tachelhit (Latin) |  | Morocco | shi-Latn-MA | 4096 |  |  |
| Taita |  |  | dav | 4096 |  |  |
| Taita |  | Kenya | dav-KE | 4096 |  |  |
| Tajik (Cyrillic) |  |  | tg | 40 |  |  |
| Tajik (Cyrillic) |  |  | tg-Cyrl | 31784 |  |  |
| Tajik (Cyrillic) |  | Tajikistan | tg-Cyrl-TJ | 1064 |  |  |
| Tamazight (Latin) |  |  | tzm | 95 |  |  |
| Tamazight (Latin) |  |  | tzm-Latn | 31839 |  |  |
| Tamazight (Latin) |  | Algeria | tzm-Latn-DZ | 2143 |  |  |
| Tamil | தமிழ் |  | ta | 73 | tam | ta |
| Tamil | தமிழ் | India | ta-IN | 1097 | tam | ta |
| Tamil | தமிழ் | Malaysia | ta-MY | 4096 | tam | ta |
| Tamil | தமிழ் | Singapore | ta-SG | 4096 | tam | ta |
| Tamil | தமிழ் | Sri Lanka | ta-LK | 2121 | tam | ta |
| Tasawaq |  |  | twq | 4096 |  |  |
| Tasawaq |  | Niger | twq-NE | 4096 |  |  |
| Tatar | Татарча |  | tt | 68 | tat | tt |
| Tatar | Татарча | Russia | tt-RU | 1092 | tat | tt |
| Telugu | తెలుగు |  | te | 74 | tel | te |
| Telugu | తెలుగు | India | te-IN | 1098 | tel | te |
| Teso |  |  | teo | 4096 |  |  |
| Teso |  | Kenya | teo-KE | 4096 |  |  |
| Teso |  | Uganda | teo-UG | 4096 |  |  |
| Thai | ภาษาไทย |  | th | 30 | tha | th |
| Thai | ภาษาไทย | Thailand | th-TH | 1054 | tha | th |
| Tibetan |  |  | bo | 81 | tib/bod | bo |
| Tibetan |  | India | bo-IN | 4096 | tib/bod | bo |
| Tibetan |  | People's Republic of China | bo-CN | 1105 | tib/bod | bo |
| Tigre |  |  | tig | 4096 | tig |  |
| Tigre |  | Eritrea | tig-ER | 4096 | tig |  |
| Tigrinya | ትግርኛ |  | ti | 115 | tir | ti |
| Tigrinya | ትግርኛ | Eritrea | ti-ER | 2163 | tir | ti |
| Tigrinya | ትግርኛ | Ethiopia | ti-ET | 1139 | tir | ti |
| Tongan |  |  | to | 4096 |  |  |
| Tongan |  | Tonga | to-TO | 4096 |  |  |
| Tsonga | Xitsonga |  | ts | 49 | tso | ts |
| Tsonga | Xitsonga | South Africa | ts-ZA | 1073 | tso | ts |
| Turkish | Türkçe |  | tr | 31 | tur | tr |
| Turkish | Türkçe | Cyprus | tr-CY | 4096 | tur | tr |
| Turkish | Türkçe | Turkey | tr-TR | 1055 | tur | tr |
| Turkmen | Türkmençe |  | tk | 66 | tuk | tk |
| Turkmen | Türkmençe | Turkmenistan | tk-TM | 1090 | tuk | tk |
| Ukrainian | Українська |  | uk | 34 | ukr | uk |
| Ukrainian | Українська | Ukraine | uk-UA | 1058 | ukr | uk |
| Upper Sorbian |  |  | hsb | 46 | hsb |  |
| Upper Sorbian |  | Germany | hsb-DE | 1070 | hsb |  |
| Urdu | اردو |  | ur | 32 | urd | ur |
| Urdu | اردو | India | ur-IN | 2080 | urd | ur |
| Urdu | اردو | Islamic Republic of Pakistan | ur-PK | 1056 | urd | ur |
| Uyghur | ئۇيغۇرچه |  | ug | 128 | uig | ug |
| Uyghur | ئۇيغۇرچه | People's Republic of China | ug-CN | 1152 | uig | ug |
| Uzbek | O‘zbek | Perso-Arabic | uz-Arab | 4096 | uzb | uz |
| Uzbek | O‘zbek | Perso-Arabic, Afghanistan | uz-Arab-AF | 4096 | uzb | uz |
| Uzbek (Cyrillic) |  |  | uz-Cyrl | 30787 |  |  |
| Uzbek (Cyrillic) |  | Uzbekistan | uz-Cyrl-UZ | 2115 |  |  |
| Uzbek (Latin) |  |  | uz | 67 |  |  |
| Uzbek (Latin) |  |  | uz-Latn | 31811 |  |  |
| Uzbek (Latin) |  | Uzbekistan | uz-Latn-UZ | 1091 |  |  |
| Vai |  |  | vai | 4096 | vai |  |
| Vai |  |  | vai-Vaii | 4096 | vai |  |
| Vai |  | Liberia | vai-Vaii-LR | 4096 | vai |  |
| Vai (Latin) |  | Liberia | vai-Latn-LR | 4096 |  |  |
| Vai (Latin) |  |  | vai-Latn | 4096 |  |  |
| Valencian | Català | Spain | ca-ES- | 2051 | cat | ca |
| Venda | Tshivenḓa |  | ve | 51 | ven | ve |
| Venda | Tshivenḓa | South Africa | ve-ZA | 1075 | ven | ve |
| Vietnamese | Tiếng Việt |  | vi | 42 | vie | vi |
| Vietnamese | Tiếng Việt | Vietnam | vi-VN | 1066 | vie | vi |
| Volapük | Volapük |  | vo | 4096 | vol | vo |
| Volapük | Volapük | World | vo-001 | 4096 | vol | vo |
| Vunjo |  |  | vun | 4096 |  |  |
| Vunjo |  | Tanzania | vun-TZ | 4096 |  |  |
| Walser |  |  | wae | 4096 |  |  |
| Walser |  | Switzerland | wae-CH | 4096 |  |  |
| Welsh |  |  | cy | 82 | wel/cym | cy |
| Welsh |  | United Kingdom | cy-GB | 1106 | wel/cym | cy |
| Wolaytta |  |  | wal | 4096 | wal |  |
| Wolaytta |  | Ethiopia | wal-ET | 4096 | wal |  |
| Wolof | Wolof |  | wo | 136 | wol | wo |
| Wolof | Wolof | Senegal | wo-SN | 1160 | wol | wo |
| Xhosa | isiXhosa |  | xh | 52 | xho | xh |
| Xhosa | isiXhosa | South Africa | xh-ZA | 1076 | xho | xh |
| Yangben |  |  | yav | 4096 |  |  |
| Yangben |  | Cameroon | yav-CM | 4096 |  |  |
| Yi |  |  | ii | 120 |  |  |
| Yi |  | People's Republic of China | ii-CN | 1144 |  |  |
| Yoruba | Yorùbá |  | yo | 106 | yor | yo |
| Yoruba | Yorùbá | Benin | yo-BJ | 4096 | yor | yo |
| Yoruba | Yorùbá | Nigeria | yo-NG | 1130 | yor | yo |
| Zarma |  |  | dje | 4096 |  |  |
| Zarma |  | Niger | dje-NE | 4096 |  |  |
| Zulu | isiZulu |  | zu | 53 | zul | zu |
| Zulu | isiZulu | South Africa | zu-ZA | 1077 | zul | zu |

## Tests

To run the test suite, first install the dependencies, then run `test`:

```sh
# Using Yarn
yarn test
```

## Dependencies

<details>
	<summary><a href="https://ghub.io/iso639-codes">iso639-codes</a>: ISO639 Codes for JavaScript</summary>
	<b>Author</b>: Tiago Danin</br>
	<b>License</b>: MIT</br>
	<b>Version</b>: ^1.0.1
</details>
<details>
	<summary><a href="https://ghub.io/langs">langs</a>: ISO 639-1/2/3 Language codes with English and local names</summary>
	<b>Author</b>: adlawson</br>
	<b>License</b>: MIT</br>
	<b>Version</b>: ^2.0.0
</details>
<details>
	<summary><a href="https://ghub.io/windows-locale">windows-locale</a>: Windows Language Code Identifier (LCID) for JavaScript</summary>
	<b>Author</b>: Tiago Danin</br>
	<b>License</b>: MIT</br>
	<b>Version</b>: ^1.1.0
</details>

## Dev Dependencies

<details>
	<summary><a href="https://ghub.io/tsd">tsd</a>: Check TypeScript type definitions</summary>
	<b>Author</b>: Sam Verschueren</br>
	<b>License</b>: MIT</br>
	<b>Version</b>: ^0.11.0
</details>
<details>
	<summary><a href="https://ghub.io/xo">xo</a>: JavaScript/TypeScript linter with great defaults</summary>
	<b>Author</b>: Sindre Sorhus</br>
	<b>License</b>: MIT</br>
	<b>Version</b>: ^0.30.0
</details>

## Contributors

Pull requests and stars are always welcome. For bugs and feature requests, please [create an issue](https://github.com/TiagoDanin/Locale-Codes/issues). [List of all contributors](https://github.com/TiagoDanin/Locale-Codes/graphs/contributors).

## License

[MIT](LICENSE) © [Tiago Danin](https://TiagoDanin.github.io)