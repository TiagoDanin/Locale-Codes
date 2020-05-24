import {expectType} from 'tsd'
import * as localeCodes from '.'
import {ILocale} from '.'

expectType<ILocale[]>(localeCodes.all)
expectType<ILocale>(localeCodes.where('name', ''))

expectType<ILocale>(localeCodes.getByName('English'))
expectType<ILocale>(localeCodes.getByNameLocal('English'))
expectType<ILocale>(localeCodes.getByLocation('Spain'))
expectType<ILocale>(localeCodes.getByTag('en-GB'))
expectType<ILocale>(localeCodes.getByLCID(2057))
expectType<ILocale>(localeCodes.getByISO6392('eng'))
expectType<ILocale>(localeCodes.getByISO6391('en'))
