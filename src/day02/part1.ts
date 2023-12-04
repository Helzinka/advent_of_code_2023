import Utils from '../utils'

export default class Resolver {
	_input: string[] = Utils.readFileFromLocal(__dirname + '/input.txt')

	lineResolver(line: string) {
		let valid = true
		const id = +line.match(/\d+(?! Game)/)[0]

		if (line.match(/\d+(?= red)/g).some((elem) => Number(elem) > 12))
			valid = false
		if (line.match(/\d+(?= green)/g).some((elem) => Number(elem) > 13))
			valid = false
		if (line.match(/\d+(?= blue)/g).some((elem) => Number(elem) > 14))
			valid = false

		if (valid) return id
		else return 0
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
