//
/**
  A) more traditional object-oriented languages: 
  (class-based inheritance: Class + constructor + methods)
 */
class PersonV1{
    name:string;
    age:number;
    action?:(action:string)=>void;
    //don't forget: function is a type in TS, but is also a first-class object: 
    //---> it can be passed as an argument to a function, or returned from a function (like any other object)
    constructor(name:string,age:number,action?:(action:string)=>void){
        this.name=name;
        this.age=age;
        this.action=action;
    }
}
const MinoV1=new PersonV1("Minoo",30);

//B) using structural typing: define structure of an object and that's it
const MinoV2:PersonV1={name:"Minoo",age:30};

interface PersonV2 {
    name: string;
    age: number;
  }

const printPerson=(person: PersonV2)=>{
  console.log(`${person.name} is ${person.age} years old`);
}
/**
B1) Structural typing is a way of relating types based solely on their members
---> For other languages, class-based inheritance is the only way to relate types
---> Class names are not important in structural typing; it does in other languages
---> Basically: same props and methods, same type; PersonV1 and PersonV2 are the same type
  */
// This object has the same shape as the Person interface, 
//---> so it is considered a valid argument for the printPerson function.
const john = { name: "John", age: 30 };
printPerson(john);

// This object has additional properties, but it still has the same 
//---> shape as the Person interface, so it is also considered a valid argument
//---> for the printPerson function.
const jane = { name: "Jane", age: 25, city: "New York" };
printPerson(jane);

// This object has a different shape than the Person interface, 
//--->so it is not considered a valid argument for the printPerson function.
const bob = { firstName: "Bob", lastName: "Smith", age: 40 };
//printPerson(bob); 
// Compilation error: Argument of type '{ firstName: string; lastName: string; age: number; }' 
//-is not assignable to parameter of type 'Person'.


