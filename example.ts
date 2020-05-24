/* eslint-disable @typescript-eslint/no-unused-expressions, @typescript-eslint/no-unused-vars */
import * as locale from '.'
import {ILocale} from '.'

locale.all // [language: '...']
const localeSelect: ILocale = locale.all[0]

locale.getByTag('pt-br').name // 'Portuguese'
locale.where('tag', 'pt-br').name // 'Portuguese'
