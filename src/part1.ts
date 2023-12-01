import Utils from './utils'

export class Resolver {
	_input: string[] = Utils.readFileFromLocal('./src/input.txt')

	public lineResolver(line: string): number {
		const calibration = line.match(/\d/g)
		if (calibration?.length) {
			if (calibration.length > 1) {
				const [first, last] = [
					calibration[0],
					calibration[calibration?.length - 1],
				]
				return Number(first + last)
			} else {
				const first = calibration[0]
				return Number(first + first)
			}
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

let data = new Resolver().response
console.log(data)