import Resolver from './part2'

describe('Day 2 - Part 2', () => {
	test('line Resolver', () => {
		const resolver = new Resolver()
		expect(
			resolver.lineResolver(
				'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
			)
		).toBe(48)
		expect(
			resolver.lineResolver(
				'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue'
			)
		).toBe(12)
		expect(
			resolver.lineResolver(
				'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'
			)
		).toBe(1560)
		expect(
			resolver.lineResolver(
				'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red'
			)
		).toBe(630)
		expect(
			resolver.lineResolver(
				'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
			)
		).toBe(36)
	})
	test('lines Resolver', () => {
		const resolver = new Resolver()
		const data = [
			'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
			'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
			'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
			'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red				',
			'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
		]
		expect(resolver.cubeResolver(data)).toBe(2286)
	})
})
