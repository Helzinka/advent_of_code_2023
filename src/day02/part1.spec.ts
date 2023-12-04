import Resolver from './part1'

describe('Day 2 - Part 1', () => {
	test('lines Resolver', () => {
		const resolver = new Resolver()
		expect(
			resolver.lineResolver(
				'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
			)
		).toBe(1)
		expect(
			resolver.lineResolver(
				'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'
			)
		).toBe(2)
		expect(
			resolver.lineResolver(
				'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'
			)
		).toBe(0)
		expect(
			resolver.lineResolver(
				'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'
			)
		).toBe(0)
		expect(
			resolver.lineResolver(
				'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
			)
		).toBe(5)
	})
})
