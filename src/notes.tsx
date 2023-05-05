interface Person {
    name: string;
    age: number;
  }
  
  function printPerson(person: Person) {
    console.log(`${person.name} is ${person.age} years old`);
  }
  
  // This object has the same shape as the Person interface, 
  //-so it is considered a valid argument for the printPerson function.
  const john = { name: "John", age: 30 };
  printPerson(john);
  
  // This object has additional properties, but it still has the same 
  //-shape as the Person interface, so it is also considered a valid argument
  //-for the printPerson function.
  const jane = { name: "Jane", age: 25, city: "New York" };
  printPerson(jane);
  
  // This object has a different shape than the Person interface, 
  //-so it is not considered a valid argument for the printPerson function.
  const bob = { firstName: "Bob", lastName: "Smith", age: 40 };
  //printPerson(bob); 
  // Compilation error: Argument of type '{ firstName: string; lastName: string; age: number; }' 
  //-is not assignable to parameter of type 'Person'.