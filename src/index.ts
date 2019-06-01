import { ID } from '../types'

export function makeId(length: number, each: (index: number) => any): string {
	return range(length).map(each).join('')
}

export function newId(length: number, type?: ID): string {
	switch (type) {
	case undefined:
	case 'any':
		return makeId(length, () => random(36).toString(36))
	case 'number':
		return makeId(length, () => random(10))
	case 'string':
		const letters = 'abcdefghijklmnopqrstuvwxyz'
		return makeId(length, () => letters.charAt(random(26)))
	default:
		return makeId(length, () => 0)
	}
}

function range(length: number): number[] {
	return Array.from(Array(length).keys())
}

function random(end: number): number {
	return ~~(Math.random() * end)
}