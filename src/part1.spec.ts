import { Resolver } from './part1'

describe('Day 1 - Part 1', () => {
	test('line Resolver', () => {
		const resolver = new Resolver()
		expect(resolver.lineResolver('1abc2')).toBe(12)
		expect(resolver.lineResolver('pqr3stu8vwx')).toBe(38)
		expect(resolver.lineResolver('a1b2c3d4e5f')).toBe(15)
		expect(resolver.lineResolver('treb7uchet')).toBe(77)
	})
	test('lines Resolver', () => {
		const resolver = new Resolver()
		const data = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet']
		expect(resolver.calibrationResolver(data)).toBe(142)
	})
})
