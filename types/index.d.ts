export type ID = 'number' | 'string' | 'any'

export interface SecureOptions {
	/**
	 * Letter capitalization
	 * 
	 * `uppercase`: Make all the letters upppercase
	 * 
	 * `lowercase`: Make all the letters lowercase
	 * 
	 * `any` (default): Randomize the capitalization
	 */
	case?: 'uppercase' | 'lowercase' | 'any'
}

/**
 * Creates a new ID with the specified character generation function
 * @param length The length of the new ID
 * @param each The character generation function. Takes in the index of the character, and returns a new character determined by the function
 */
export function makeId(length: number, each: (index: number) => any): string

/**
 * Creates a new ID with the specified length, type, and options
 * @param length The length of the new ID
 * @param type Default is "any". Can be "any": numbers and letters, "number": just numbers, "string": just letters
 * @param options To further customize the ID creation. Must explicitly specify the `type` if you want to add options
 */
export function newId(length: number, type?: ID, options?: SecureOptions): string