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

## `SecureOptions`

### `case`

**`uppercase`**: Make all the letters upppercase

**`lowercase`**: Make all the letters lowercase

**`any`** (default): Randomize the capitalization

```typescript
interface SecureOptions {
    case: 'uppercase' or 'lowercase' or 'any' (default)
}
```

## `makeId`

**Creates a new ID with the specified character generation function**

**`length`**: The length of the new ID

**`each`**: The character generation function. Takes in the index of the character, and returns a new character determined by the function

```typescript
function makeId(length: number, each: (index: number) => any): string
```

## `newId`

**Creates a new ID with the specified length, type, and options**

**`length`**: The length of the new ID

**`type`**: default is `"any"`

**`if type = "any"`** or left blank: numbers and letters

**`if type = "number"`**: just numbers

**`if type = "string"`**: just letters

**`options`** (type **[SecureOptions](#secureoptions)**): To further customize the ID creation. Must explicitly specify the **`type`** if you want to add options

```typescript
function newId(length: number, type?: 'any' or 'number' or 'string', options?: SecureOptions): string
```

## `encrypt`

**Encrypts text with a key**

**`text`**: What you want to encrypt

**`key`**: The encryption key

```typescript
function encrypt(text: string, key: string): string
```

## `decrypt`

**Decrypts encrypted text with a key**

**`text`**: The encrypted text you want to decrypt

**`key`**: The encryption key (the key you encrypted the original text with)

```typescript
function decrypt(text: string, key: string): string
```
