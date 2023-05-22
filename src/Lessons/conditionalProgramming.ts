// Purpose: To demonstrate conditional programming in TypeScript.

// Example 1: if-else statement
const age: number = 20;
if (age >= 18) {
  console.log('You are eligible to vote.'); // Executed if the condition is true
} else {
  console.log('You are not eligible to vote.'); // Executed if the condition is false
}

// Example 2: switch statement
//---> Note: switch is usually more efficient than if-else statements
//---> Works if switch condition ('day' here) is of type string or number
const getDayName = (day: number): string => {
    switch (day) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      default:
        return 'Invalid day';
    }
  };

// Example 3: ternary operator --> concise if-else statements
//---> === is the strict equality operator; 
//---> returns true if both operands are equal and of the same type;
const isEven: boolean = age % 2 === 0;
//---> ternary operator syntax: condition ? result_If_True : result_If_False
const message: string = isEven ? 'The number is even.' : 'The number is odd.';
console.log(message);



// Example 4: iterating over an array using a for loop
const numbers: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Example 5: iterating over an array using a while loop
let index: number = 0;
while (index < numbers.length) {
  console.log(numbers[index]);
  index++;
}

// Example 6: iterating over an array using a for...of loop 
//---> (gives the iterator the vales of each array element)
//---> Can be more practical when dealing with array of objects (calling methods on each object)
for (const number of numbers) {
    console.log(number.valueOf());
  }

// Example 7: iterating over an array using a map function
//---> map() is a function that takes another function as an argument (you'll see callbacks later)
//---> map() returns a new array with the results of calling a provided function on every element in the calling array
//---> super handy for transforming data
type Person={
    name: string;
    age: number;
  }
  
  const people: Person[] = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 40 }
  ];
  
  const names: string[] = people.map((person:Person) => person.name);
  
  console.log(names);
  
//-------------------------------------------------------------------------------------------------//
/**Time TO EXERCISE:
  * 1. create a function which returns an array of 20 numbers (each number generated randomly between 1 and 100)
  * 2. Create 2 functions that takes in this array of numbers and replaces all even numbers with the string "even"
  * 3. Use the array.map() function to create a new array of objects 
  * 4. Use a loop and a ternary operator to modify the array
*/