import Utils from '../utils'

export default class Resolver {
	_input: string[] = Utils.readFileFromLocal(__dirname + '/input.txt')

	public lineResolver(line: string): number {
		const calibration = line.match(/\d/g)
		if (calibration?.length) {
			const [first, last] = [
				calibration[0],
				calibration[calibration?.length - 1],
			]
			return Number(first + last)
		}
		return 0
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
