let student: {
    name: string;
    id: string;
    isFunny: boolean;
}={
    //let allows to redefine the value of a property later
    // but the typing for the object is defined/locked in the first time you declare it
    name:'anache',
    id:'4',
    isFunny:true
  }

  
  
const {id,isFunny}=student

console.log(isFunny)


/*
<Spending spending={spending} Delete={Delete} Edit={Edit} optional={optional}/>

...
props.spendings
props.Delete

const {spending,Delete,Edit,optional}=props
*/

//array deconstruction

//Array destructuring in TypeScript allows you to unpack elements from an array and assign them to individual variables. 
//The syntax is very similar to regular JavaScript, but with TypeScript, you can also specify the types of the variables.

let myArray: [number, string, boolean] = [42, "hello", true];

let [myNumber, myString, myBoolean] = myArray;

console.log(myNumber);  // Output: 42
console.log(myString);  // Output: hello
console.log(myBoolean); // Output: true