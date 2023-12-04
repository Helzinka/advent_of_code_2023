import Utils from '../utils'

export default class Resolver {
	_input: string[] = Utils.readFileFromLocal('./src/day01/input.txt')
	_transform: { [k: string]: string } = {
		one: 'one1one',
		two: 'two2two',
		three: 'three3three',
		four: 'four4four',
		five: 'five5five',
		six: 'six6six',
		seven: 'seven7seven',
		eight: 'eight8eight',
		nine: 'nine9nine',
	}

	public lineResolver(line: string): number {
		for (const key in this._transform) {
			line = line.replaceAll(key, this._transform[key])
		}
		const firstDigit = line.match(/\d/)[0]
		const lastDigit = line.match(/(\d)[a-z]*$/)[1]
		return Number(`${firstDigit}${lastDigit}`)
	}

	public calibrationResolver(lines: string[]): number {
		let response = 0
		for (const line of lines) {
			response += this.lineResolver(line)
		}
		return response
	}

	get response() {
		return this.calibrationResolver(this._input)
	}
}
