//Sometimes, we wish to retrieve, manipulate and enforce the types of objects in our code
// the keywords are "typeof", "keyof" and "as"


const weather = {
    date: new Date(),
    weather: 'sunny',
    temperature: 25,
    humidity: 50,
}
//typeof yields the structural typing of weather (fly over OttawaWeather to see)
//here, we get the type of weather and assign it to OttawaWeather
const OttawaWeather:  typeof weather = {
    date: new Date(),
    weather: 'snowwy',
    temperature: -25,
    humidity: 50,
};

//keyof returns the keys of a type as an union (OR) of its props ->Fly over isThisAKey to see the type
const isThisAKey: keyof typeof OttawaWeather = 'date';//isThisAKey is of type "date" | "weather" | "temperature" | "humidity"


//hasOwnProperty is a method of the Object class; it returns true if the object has the specified property
const doesHaveProperty: boolean = OttawaWeather.hasOwnProperty('date');//true


//type assertion: TS is usually pretty good at infering types; sometimes it needs help. This is how you enforce a type
interface Cat {
    name: string;
    purr: () => void;
  }
  
interface Dog {
    name: string;
    bark: () => void;
}

const petSound = (pet: Cat | Dog): void => {//pet is of type Cat or Dog
    // we enforce the type of pet as Cat by using the "as" keyword so that we can check if it has a purr method
    // if pet is of type Cat, it has a purr method so (pet as Cat).purr would be truthy
    // this works because pet is potentially of type Cat; if it is, it has a purr method
    if ((pet as Cat).purr) {
        //that, in turn, would make the .purr() method callable (as the purr method does exist)
        (pet as Cat).purr();
    } else {
        (pet as Dog).bark();
    }
};
  

//real application of type assertion:

//here is a random object
const randomObject:unknown = {
    name: 'John',
    age: 25,
    isStudent: true,
    hobbies: ['reading', 'coding', 'gaming'],
    
}

//-------------------------------------------------------------------------------------------------//
/**Time TO EXERCISE:

1) being an unknown object, randomObject does not have a .hobbies property.

2) Write a function that handles randomObject and returns the hobbies of the person as a string

3) Use type assertion
*/


const school={
    name: 'Carleton',
    location: 'Ottawa',
}

const newSchool: typeof school = {
    name: 'Uottawa',
    location: 'Ottawa',
}