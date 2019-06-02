import CryptoJS from 'crypto-js'
import { ID, SecureOptions } from '../types'

export function makeId(length: number, each: (index: number) => any): string {
	checkLength(length)
	return range(length).map(each).join('')
}

export function newId(length: number, type?: ID, options?: SecureOptions): string {
	checkLength(length)
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

export function encrypt(text: string, key: string): string {
	return CryptoJS.AES.encrypt(text, key).toString()
}

export function decrypt(text: string, key: string): string {
	return CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8)
}

function checkLength(length: number) {
	if (length < 0)
		throw new Error('Length cannot be negative')
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