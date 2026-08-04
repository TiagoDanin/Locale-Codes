import localeCodes from './index'
import { expectType } from 'tsd'
import type { ILocale, LocaleCodes } from './index'

// The public types must be reachable from the package entry point
expectType<LocaleCodes>(localeCodes)

// Type tests - single result
expectType<ILocale[]>(localeCodes.all)
expectType<ILocale | undefined>(localeCodes.where('name', ''))
expectType<ILocale | undefined>(localeCodes.getByName('English'))
expectType<ILocale | undefined>(localeCodes.getByNameLocal('English'))
expectType<ILocale | undefined>(localeCodes.getByLocation('Spain'))
expectType<ILocale | undefined>(localeCodes.getByTag('en-GB'))
expectType<ILocale | undefined>(localeCodes.getByLCID(2057))
expectType<ILocale | undefined>(localeCodes.getByISO6392('eng'))
expectType<ILocale | undefined>(localeCodes.getByISO6391('en'))

// Type tests - every result
expectType<ILocale[]>(localeCodes.whereAll('name', ''))
expectType<ILocale[]>(localeCodes.getAllByName('English'))
expectType<ILocale[]>(localeCodes.getAllByNameLocal('English'))
expectType<ILocale[]>(localeCodes.getAllByLocation('Spain'))
expectType<ILocale[]>(localeCodes.getAllByTag('en-GB'))
expectType<ILocale[]>(localeCodes.getAllByLCID(2057))
expectType<ILocale[]>(localeCodes.getAllByISO6392('eng'))
expectType<ILocale[]>(localeCodes.getAllByISO6391('en'))
