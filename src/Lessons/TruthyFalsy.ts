/**
In TypeScript, falsy is a super useful concept you'll be using quite often.
Falsy values are values that are considered false when encountered in a Boolean context.

Falsy Values:
* false
* 0
* -0
* 0n (BigInt zero)
* "" (empty string)
* null
* undefined
* NaN
*/

let falsy //undefined as it hasn't been assigned a value

//ternary operator
const isFalsy:boolean= falsy ? true : false//true

//more use cases
const value1: number = 0;
const value2: string = "";

if (value1) {
  console.log("value1 is truthy."); // This will not be executed
} else {
  console.log("value1 is falsy."); // Outputs: "value1 is falsy."
}

if (value2) {
  console.log("value2 is truthy."); // This will not be executed
} else {
  console.log("value2 is falsy."); // Outputs: "value2 is falsy."
}