import { KeyObject } from 'crypto'
import Utils from '../utils'

export default class Resolver {
	_input: string[] = Utils.readFileFromLocal('./src/day01/input.txt')
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

	public test() {
		return this._input
			.map((row: any) => {
				const numberMap = {
					one: 1,
					two: 2,
					three: 3,
					four: 4,
					five: 5,
					six: 6,
					seven: 7,
					eight: 8,
					nine: 9,
				}
				Object.keys(numberMap).forEach((key) => {
					if (row.includes(key))
						row = row.replaceAll(
							key,
							`${key}${numberMap[key]}${key}`
						)
					console.log(row)
				})
				const firstDigit = row.match(/\d/)[0]
				const lastDigit = row.match(/(\d)[a-z]*$/)[1]
				return parseInt(`${firstDigit}${lastDigit}`)
			})
			.reduce((acc, curr) => acc + curr, 0)
	}

	public transformValideNumber(line: string): any {
		let data = []

		for (const key in this._transform) {
			let posWord = line.search(key)
			let posNumber = line.search(this._transform[key])
			if (posWord >= 0) {
				data.push({
					number: false,
					idx: posWord,
					value: key,
				})
			}
			if (posNumber >= 0) {
				data.push({
					number: true,
					idx: posNumber,
					value: this._transform[key],
				})
			}
		}
		data.sort((a, b) => a.idx - b.idx)

		const [first, last] = [data[0], data[data.length - 1]]

		if (!first.number)
			line = line.replace(first.value, this._transform[first.value])
		if (!last.number)
			line = line.replace(last.value, this._transform[last.value])
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
