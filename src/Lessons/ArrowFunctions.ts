import { type } from "os";

//1) Arrow functions
//function which takes in a name and says hello to that name
const sayHello = (name:string) => {
    console.log(`Hello ${name}`);
}

//same as (this is ugly)
function sayHello2(name:string){
    console.log(`Hello ${name}`);
}

//-----------------------------------------------------------------------------------------------//

//2 Callbacks and arrow functions
/**
A) Functions in JavaScript are first-class objects: meaning they can be passed around like any other value.
B) That's why you can also use them as const
B) A callback function is simply a function passed into another function as an argument
 */

const printThisString=(text:string)=>{
    console.log(text);
}

//function which takes in a function and calls it
const runSomeAction=(action:(someString:string)=>void)=>{
    action("Hello World");
}

runSomeAction(printThisString);//Hello World

//using an anonymous function: we define the function inside the argument zone-same outcome
//runSomeAction is set to take in a function that takes in a string and returns void
//the type of the function is (string:string)=>void
runSomeAction((string:string)=>{console.log(string)});//Hello World

//-----------------------------------------------------------------------------------------------//

//3) More on callbacks and arrow functions
//it is also possible to have a function without a name
//this is called an anonymous function
//this is useful when you want to pass a function as an argument to another function
//this is whatr is called a callback pattern
type Person = {
    name:string,
    age:number,
}

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
  ];

//map gives you access to every element in an array
//it takes in a function as an argument; the function describes the transformation you want to apply to each element
//you're passing a callback to the map function
const names = people.map((person) => person.name);

console.log(names); // Output: ["Alice", "Bob", "Charlie"]

//in a more traditional implementation, you would have to define a function that takes in a person and returns the name
//and then pass that function to the map function
//the map function implicitly passes every item in the array to the function you pass in
//this is what is called a callback pattern
const getNames = (person:  typeof people[0]) => {
    return person.name;
}
const names2 = people.map(getNames);

//without using the .map function, you'd loop through the array and call the function on each element
const names3 = (people:Person[])=>{
    let returnArray:string[] = [];
    for (let person of people) {
        returnArray.push(person.name);
    }
    return returnArray;
}

//-----------------------------------------------------------------------------------------------//

//4) how you usually see it in React

//const [count, setCount] = useState(0);
// we wanna do some complex math/computation on the current state before setting it
//(although you can create a separate funtion for the computing (better separation of concerns-> cleaner code)
//-and pass that function to the setCount function as an argument using a callback pattern)
// case study: we want to setCount as the quadratic formula of count

const squareFunction = (x:number) => {
    //we wish to execute the quadratic formula
    //x^2 + 2x + 1
    return x*x + 2*x + 1;
}

const clickHandler = () => {
    /** commmenting out because there are no useState in pure JS-a React feature/hook
    setCount((count) => {
        console.log(count)
        return squareFunction(count)});-> the setCount will take the return value of the callback function
     */
}

//-----------------------------------------------------------------------------------------------//

//5) time to practice

/*
A) Write a function called calculate that takes two numbers x and y and a callback function operation as parameters. 

B) The calculate function should apply the operation callback to the numbers x and y and return the result (ex: add).

C) The operation callback can be any mathematical operation, such as addition, subtraction, multiplication, or division.

D) use arrow functions and correct types (primitive types, function types)
*/

const applyOpperations = (x:number, y:number, operation:Function):number=>{
    return operation(x,y);
}

const adder = (x:number, y:number):number=>x+y
const add = applyOpperations(1,2,adder);