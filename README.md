# securejs

## **[Go to documentation](#documentation)**

## Download

```bash
npm i securejs
```

## Usage

### JavaScript

```javascript
const secure = require('securejs')
```

### TypeScript

```typescript
import * as secure from 'securejs'
```

## Creating a new ID

```javascript
secure.newId(10)

// Output: 2o9GCroXsD
```

```javascript
secure.newId(10, 'string', {
    case: 'uppercase'
})

// Output: SUPRJVKXQL
```

```javascript
secure.newId(10, 'number')

// Output: 6724359154
```

```javascript
secure.makeId(10, index => index + 1)

// Output: 12345678910
```

## Encryption / Decryption

```javascript
// text, key
secure.encrypt('securejs is the best', 'abc123')

// Output: U2FsdGVkX1/IdEzGVRJ2NvQeVSImQrda0d4ucwpolRa4o7WPdspqxHWdz39Mz32G
```

```javascript
// encrypted text, key
secure.decrypt('U2FsdGVkX1/IdEzGVRJ2NvQeVSImQrda0d4ucwpolRa4o7WPdspqxHWdz39Mz32G', 'abc123')

// Output: securejs is the best
```

# Documentation

```typescript
interface SecureOptions {
    // Letter capitalization
    // `uppercase`: Make all the letters upppercase
    // `lowercase`: Make all the letters lowercase
    // `any` (default): Randomize the capitalization
    case: 'uppercase' or 'lowercase' or 'any' (default)
}
```

```typescript
// Creates a new ID with the specified character generation function
// length: The length of the new ID
// each: The character generation function. Takes in the index of the character, and returns a new character determined by the function
function makeId(length: number, each: (index: number) => any): string
```

```typescript
// Creates a new ID with the specified length, type, and options
// length: The length of the new ID
// type: default is "any"
// type = "any": numbers and letters
// type = "number": just numbers
// type = "string": just letters
// options: To further customize the ID creation. Must explicitly specify the type if you want to add options
function newId(length: number, type?: 'any' or 'number' or 'string', options?: SecureOptions): string
```

```typescript
// Encrypts text with a key
// text: What you want to encrypt
// key: The encryption key
function encrypt(text: string, key: string): string
```

```typescript
// Decrypts encrypted text with a key
// text: The encrypted text you want to decrypt
// key: The encryption key (the key you encrypted the original text with)
function decrypt(text: string, key: string): string
```