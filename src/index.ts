import { ID, SecureOptions } from '../types'

export function makeId(length: number, each: (index: number) => any): string {
	return range(length).map(each).join('')
}

export function newId(length: number, type?: ID, options?: SecureOptions): string {
	const letters = lettersForCase((options || {}).case)
	switch (type) {
	case 'number':
		return makeId(length, () => random(10))
	case 'string':
		return makeId(length, () => letters.charAt(random(letters.length)))
	default:
		const all = letters.concat('0123456789')
		return makeId(length, () => all.charAt(random(all.length)))
	}
}

function lettersForCase(letterCase: string | undefined): string {
	const lowercase = 'abcdefghijklmnopqrstuvwxyz'
	const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	switch (letterCase) {
	case 'uppercase':
		return uppercase
	case 'lowercase':
		return lowercase
	default:
		return lowercase.concat(uppercase)
	}
}

function range(length: number): number[] {
	return Array.from(Array(length).keys())
}

function random(end: number): number {
	return ~~(Math.random() * end)
}