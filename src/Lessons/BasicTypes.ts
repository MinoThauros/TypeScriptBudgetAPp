//LESSON 1: Basic Types

// 1) Boolean
const isTrue: boolean = true;
const isFalse: boolean = false;

// 2) Number
const decimalNumber: number = 3.14;
const integerNumber: number = 42;

// 3) String
const fullName: string = 'John Doe';
const message: string = `Hello, ${fullName}!`;

// 4) Null
// --->The null type has only one value, null.
const nullValue: null = null;


// 5) Undefined
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

// 6) Symbol
// --->Symbols are unique and immutable values that can be used as property keys.
// --->created with the Symbol() constructor.
// ---> You'll rarely need to use this type so don't worry about it too much.
const uniqueSymbol: symbol = Symbol('unique'); 

// BigInt: 
// ---> Use it for numbers that are larger than the Number.MAX_SAFE_INTEGER.
// ---> Basically for any number that is larger than 2^53 - 1 (abnormally large number).
// ---> Created using the BigInt() constructor; you won't use this type often.
const bigInteger: bigint = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1); 

// Void
// --->Void is a little like the opposite of any: the absence of having any type at all. 
// --->You may commonly see this as the return type of functions that do not explicitly return a value.
function logMessage() {
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
anyValue.hello(); // No error: any value can be assigned to any type

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
// --->TypeScript leverages the type system in order to catch bugs early.
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
//(defining custom types; you've seen it in React when defining props types)
type Name = { firstName: string; lastName: string };
type Age = { age: number };
type Person = Name & Age;
const personInfo: Person = { firstName: 'John', lastName: 'Doe', age: 25 };

// Functions: can effectively be treated as types in TypeScript
//--->The type of a function is its parameter list and return type.

/**
 * Ex: Function which takes in no parameters and returns nothing (void type)
 */
function action(): void{
  console.log('action');
}

/**
 * Ex: Function which takes in a string parameter and returns a string
 */
function toCapitalCase(input: string):string{
  //using let because we are reassigning the value of the variable
  let capitalizedString: string = '';

  // Iterate over each character of the input string
  for (let i = 0; i < input.length; i++) {
    // Get the character at the current index
    const currentChar: string = input.charAt(i);

    // Convert the character to uppercase
    const capitalizedChar: string = currentChar.toUpperCase();

    // Append the capitalized character to the result string
    capitalizedString += capitalizedChar;
  }

  // Return the final capitalized string
  return capitalizedString;
};


// Uknown Type:
//---> `unknown` is the type-safe counterpart of `any`.
//---> You can assign unknown to anything, but TS won't let you use that value until you do a type check/type assertion.
function processUnknown(value: unknown): void {
  if (typeof value === 'string') {//typeof allows you to retrieve the type of a variable as a string (ex: "string", "number", "boolean", etc...)

    // Value is narrowed down to string type-that's why TS lets you use toUpperCase() which is a string specific method
    console.log('Processing a string:', value.toUpperCase());

  } else if (typeof value === 'number') {

    // Value is narrowed down to number type-that's why TS lets you use * 2 which is a number specific operation
    console.log('Processing a number:', value * 2);

  } else {
    console.log('Processing unknown value:', value);
  }
}

let unknownValue: unknown = 'Hello, TypeScript!';
processUnknown(unknownValue); // Outputs: Processing a string: HELLO, TYPESCRIPT!

unknownValue = 42;
processUnknown(unknownValue); // Outputs: Processing a number: 84

unknownValue = true;

processUnknown(unknownValue); // Outputs: Processing unknown value: true


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/**Time TO EXERCISE:

A) Create a Spending type and then spending object object with the following properties:
- amount: number
- category: string
- description: string
- date: Date
Use Duck Typing to create the object.

B) Improve the previous Spending type by restricting the possible category values to the following:
- Food
- Rent
- Travel
- Utilities
- Wellness
- Others

C) Create a function (with correct typechecking) which takes in the spending and returns a string with the following format:
- "spending of type {category}: {description} of {amount}€

D) Export the type to be reused in other files
 */
