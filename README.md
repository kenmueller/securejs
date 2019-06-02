# securejs

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
secure.makeId(10, index => index + 1)

// Output: 12345678910
```
