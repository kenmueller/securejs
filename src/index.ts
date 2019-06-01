import { ID } from '../types'

export function makeId(length: number, each: (index: number) => any): string {
	return range(length).map(each).join('')
}

export function newId(length: number, type?: ID): string {
	const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	switch (type) {
	case undefined:
	case 'any':
		return makeId(length, () => characters.charAt(random(62)))
	case 'number':
		return makeId(length, () => random(10))
	case 'string':
		return makeId(length, () => characters.charAt(random(52)))
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