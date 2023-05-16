// Boolean
const isTrue: boolean = true;
const isFalse: boolean = false;

// Number
const decimalNumber: number = 3.14;
const integerNumber: number = 42;

// String
const fullName: string = 'John Doe';
const message: string = `Hello, ${fullName}!`;

// Null
// --->The null type has only one value, null.
const nullValue: null = null;

// Undefined
// --->The undefined type has only one value, undefined.
// --->Used when a variable has not been assigned a value.
// --->Also the return type for functions that do not explicitly return a value.
// null vs undefined: 
/**
* Can be used interchangeably in most cases, but there are some differences.
* null means the explicit absence of a value.
* undefined means the value is not defined (yet).
 */
 
const undefinedValue: undefined = undefined;

// Symbol
// --->Symbols are unique and immutable values that can be used as property keys.
// --->created with the Symbol() constructor.
const uniqueSymbol: symbol = Symbol('unique'); 

// BigInt
// --->BigInt is a numeric primitive type that represents integers with arbitrary precision.
const bigInteger: bigint = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1); 

// Void
// --->Void is a little like the opposite of any: the absence of having any type at all. 
// --->You may commonly see this as the return type of functions that do not explicitly return a value.
function logMessage(): void {
  console.log('This is a void function.');
}

// Any
// --->The any type is a powerful way to work with existing JavaScript, 
// --->allowing you to gradually opt-in and opt-out of type checking during compilation.
// --->Since it's potentially "anything", any method can be called on it (TS will let it slide).
// --->ex: calling a .hello() method on a string; shouldn't work, but TS won't complain.
// --->Use it sparingly, as it defeats the purpose of TS.
let anyValue: any = 'This can be any type';
anyValue = 42;
anyValue = true;

// Never
// --->The never type represents the type of values that never occur 
// --->e.g., a function that always throws an error or one whcih never returns (infinite loop).
function throwError(message: string): never {
  throw new Error(message); 
}

/**
Array vs Tuple:
- Tuple stores a fixed number of elements of different types.
- Hence why you can typecheck array as Array<string> or string[].
- but tuple would be [string, number, boolean] or [string, number, boolean?]
- " ? " means optional member
 */
// Array
const numbers: number[] = [1, 2, 3, 4, 5];
const fruits: Array<string> = ['apple', 'banana', 'orange'];
// Tuple
const person: [string, number, BigInt?] = ['John Doe', 25];



// Enum
// --->Enums allow us to define a set of named constants.
// --->Using enums can make it easier to document intent, or create a set of distinct cases.
// --->TypeScript provides both numeric and string-based enums (value of {key=value} pairs).
enum Color {
  Red=3,
  Green='wow',
  Blue=34,
}
const selectedColor: Color = Color.Green;

// Literal Types
// --->Literal types allow you to specify the exact value a string, number, or boolean.
// --->This is useful when combined with union types to model a finite set of values.
// --->Will take only one of the defined values
// --->TypeScript can leverage the type system in order to catch bugs early.
// --->The more precise the type, the less bugs.
const userRole: 'admin' | 'user' = 'admin';
const direction: 'up' | 'down' | 'left' | 'right' = 'up';
const IdNumbers: 1 | 2 | 3 | 4 | 5 = 5;//also works with numbers

// Union Types
// --->A logical OR between types.
let value: string | number = 'abc';
value = 123;

// Intersection Types
// --->A logical AND between types.
// --->Useful for combining existing types to create a new type.
type Name = { firstName: string; lastName: string };
type Age = { age: number };
type Person = Name & Age;
const personInfo: Person = { firstName: 'John', lastName: 'Doe', age: 25 };