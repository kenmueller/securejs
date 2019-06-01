import { ID } from '../types'

export function makeId(length: number, each: (index: number) => any): string {
	return range(length).map(each).join('')
}

export function newId(length: number, type?: ID): string {
	switch (type) {
	case undefined:
	case 'any':
		return makeId(length, () => (~~(Math.random() * 36)).toString(36))
	case 'number':
		return makeId(length, () => ~~(Math.random() * 10))
	case 'string':
		// return range(length) Math.random().toString(36).substring(length)
	default:
		return ''
	}
}

function range(length: number): number[] {
	return Array.from(Array(length).keys())
}