import Utils from '../utils'

export default class Resolver {
	_input: string[] = Utils.readFileFromLocal(__dirname + '/input.txt')

	lineResolver(line: string, y: number) {
		let isNumber = false
		let arrNumber = []
		let number = ''
		for (let x = 0; x < line.length; x++) {
			if (!isNaN(parseInt(line[x]))) {
				number += line[x]
			} else {
				arrNumber.push(number)
				number = ''
			}
			console.log(line[x], y, x)
		}
		return arrNumber
	}

	resolver(lines: string[]) {
		let allNumber = []
		for (let y = 0; y < lines.length; y++) {
			console.log(this.lineResolver(lines[y], y))
		}
	}

	get response() {
		return this.resolver(['467..114..', '...*......'])
	}
}
