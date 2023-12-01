import { Resolver } from './part2'
const resolver = new Resolver()

describe('Day 1 - Part 2', () => {
	test('lines Transform', () => {
		const data = 'eightwothree'
		expect(resolver.transformValideNumber(data)).toBe('83')
	})
	// test('line Resolver', () => {
	// 	expect(resolver.lineResolver('two1nine')).toBe(29)
	// 	expect(resolver.lineResolver('eightwothree')).toBe(83)
	// 	expect(resolver.lineResolver('abcone2threexyz')).toBe(13)
	// 	expect(resolver.lineResolver('xtwone3four')).toBe(24)
	// })

	// test('lines Resolver', () => {
	// 	const data = [
	// 		'two1nine',
	// 		'eightwothree',
	// 		'abcone2threexyz',
	// 		'xtwone3four',
	// 		'4nineeightseven2',
	// 		'zoneight234',
	// 		'7pqrstsixteen',
	// 	]
	// 	expect(resolver.calibrationResolver(data)).toBe(281)
	// })
})
