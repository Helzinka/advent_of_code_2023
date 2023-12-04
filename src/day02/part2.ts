import Utils from '../utils'

export default class Resolver {
	_input: string[] = Utils.readFileFromLocal(__dirname + '/input.txt')

	lineResolver(line: string) {
		const [red, green, blue] = [
			Math.max(...line.match(/\d+(?= red)/g).map((elem) => Number(elem))),
			Math.max(
				...line.match(/\d+(?= green)/g).map((elem) => Number(elem))
			),
			Math.max(
				...line.match(/\d+(?= blue)/g).map((elem) => Number(elem))
			),
		]
		return red * green * blue
	}

	cubeResolver(lines: string[]) {
		let game = 0

		for (const line of lines) {
			game += this.lineResolver(line)
		}

		return game
	}

	get response() {
		return this.cubeResolver(this._input)
	}
}
