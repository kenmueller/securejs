import { ID } from '../types'

export function makeId(length: number, each: (index: number) => any): string {
	return range(length).map(each).join('')
}

export function newId(length: number, type?: ID): string {
	const array = range(length)
	switch (type) {
	case undefined:
	case 'any':
		return array.map(_i => (~~(Math.random() * 36)).toString(36)).join('')
	case 'number':
		// return array.map(() => '')
	case 'string':
		// return range(length) Math.random().toString(36).substring(length)
	default:
		return ''
	}
}

function range(length: number): number[] {
	return Array.from(Array(length).keys())
}