# Run Time Arguments Validator
A simple and light-weight arguments validator

## Install
Using NPM:
```
npm i --save rta-validator
```

In Node.js:
```
const rtaValidator = require('rta-validator')
```

## API
`rtaValidator` accept two arguments:
- `tasks` - Array of tasks to validate.
- `errorHandler` - Callback method to handle cases of error (optional).

`task` expect three properties:
- `name` - Arguments name, use for informative errors.
- `type` - The expected types (support in multiple types) for argument, type property accept three cases: type name as string, array of types name, type shortcuts as string.
- `val` - The argument we validate.

## Supported Types
| Type name 	| Type shortcuts name 	| Description                          	|
|-----------	|---------------------	|--------------------------------------	|
| object    	| o                   	| typeof object and not array or error 	|
| function  	| f                   	| typeof function                      	|
| string    	| s                   	| typeof string                        	|
| number    	| n                   	| typeof number                        	|
| array     	| a                   	| typeof array                         	|
| undefined 	| u                   	| typeof undefined                     	|
| boolean   	| b                   	| typeof boolean and not 1/0 (numbers) 	|
| error     	| e                   	| typeof error                         	|

## Examples
Multiple arguments
```
const rtaValidator = require('rta-validator')

rtaValidator([
    {name: 'foo', type: 'object', val: {foo: 'bar'}},
    {name: 'baz', type: 'o', val: {baz: 'bar'}},
    {name: 'baz', type: ['o', 'undefined'], val: undefined},
]) // void - all values pass validation
```

Failing validation
```
rtaValidator([
    {name: 'baz', type: ['o', 'undefined'], val: ['baz']},
]) // Throw exception
```

Custom error handler
```
rtaValidator([
    {name: 'baz', type: ['o', 'undefined'], val: ['baz']},
], (err) => err) // return error
```

Custom validator
```
rtaValidator([
    {name: 'baz', type: (v) => v === 3, val: 3},
], (err) => err) // return error
```

## Test
Install dependencies via NPM:
```
npm i
```

Run test suites:
```
npm test
```