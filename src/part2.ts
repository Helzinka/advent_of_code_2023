import Utils from './utils'

export class Resolver {
	_input: string[] = Utils.readFileFromLocal('./src/input.txt')
	_transform: { [k: string]: string } = {
		one: '1',
		two: '2',
		three: '3',
		four: '4',
		five: '5',
		six: '6',
		seven: '7',
		eight: '8',
		nine: '9',
	}

	public transformValideNumber(line: string): any {
		// "aceightwothree"

		let cumulateString = ''
		let stringIncludedFound = false

		for (const char of line) {
			cumulateString += char
			for (const key in this._transform) {
				if (key === cumulateString) {
					const newLine = line.replace(key, this._transform[key])
					return this.transformValideNumber(newLine)
				} else if (key.includes(cumulateString)) {
					stringIncludedFound = true
				}
			}
			if (stringIncludedFound) {
				stringIncludedFound = false
			} else {
				cumulateString = ''
			}
		}
		return line
	}

	public lineResolver(line: string): number {
		line = this.transformValideNumber(line)
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

let data = new Resolver().transformValideNumber('aceightwosix')
console.log(data)
