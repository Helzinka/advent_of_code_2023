import fs from 'fs'

export default class Utils {
	public static readFileFromLocal(path: string): string[] {
		let input = fs.readFileSync(path, 'utf-8').replace(/[\r]/gi, '')
		let output = input.split('\n')
		return output
	}
}
