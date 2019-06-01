export type ID = 'number' | 'string' | 'any'

/**
 * Creates a new ID with the specified character generation function
 * @param length The length of the new ID
 * @param each The character generation function. Takes in the index of the character, and returns a new character determined by the function
 */
export function makeId(length: number, each: (index: number) => any): string

/**
 * Creates a new ID with the specified length and type
 * @param length The length of the new ID
 * @param type Default is 'any'. Can be 'any': numbers and letters, 'number': just numbers, 'string': just letters
 */
export function newId(length: number, type?: ID): string