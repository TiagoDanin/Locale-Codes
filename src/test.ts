import localeCodes from './index'
import { expectType } from 'tsd'
import type { ILocale } from './types'

// Type tests
expectType<ILocale[]>(localeCodes.all)
expectType<ILocale | undefined>(localeCodes.where('name', ''))
expectType<ILocale | undefined>(localeCodes.getByName('English'))
expectType<ILocale | undefined>(localeCodes.getByNameLocal('English'))
expectType<ILocale | undefined>(localeCodes.getByLocation('Spain'))
expectType<ILocale | undefined>(localeCodes.getByTag('en-GB'))
expectType<ILocale | undefined>(localeCodes.getByLCID(2057))
expectType<ILocale | undefined>(localeCodes.getByISO6392('eng'))
expectType<ILocale | undefined>(localeCodes.getByISO6391('en'))