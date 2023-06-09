import { InputStream } from "../utils/Input.js";
const Input=new InputStream();

/*
+Code is compiled from top to bottom, line by line in synchronous programming
+Doesn't depend on anything outside of the code; it does not wait for anything
 */
const count = () => {
    console.log('First');
    console.log('Second');
    console.log('Third');
    console.log('Fourth');
};

/**
* However, sometimes, some operations are asynchronous, meaning that they take time to complete.
* For example, when we make a request to a server, it takes time to get a response (depends on the internet connection).
* Or when your code needs something to finish before it can continue 
* (ex. waiting for a file to load, or asking the user to input variables and then press enter before continuing).
*  "async" keyword is used to define an asynchronous function.
*  "await" keyword is used to wait for a Promise (asynchronous variable) to resolve
 */
const printEnteredText = async () => {
    //The await keyword is used to wait for a Promise (asynchronous variable) to resolve
    const enteredText=await Input.Input('Enter text: ');
    console.log(enteredText);
    
}

/**
 * Let's take a minute to dive deeper into promises
 * ---> Promises are simply the return value of an asynchronous function
 * ---> They'll be "resolved" sometime in the future; either successfully or unsuccessfully (ex: a failed API call)
 * ---> here is a function which returns a sentence after a desired amount of time (in milliseconds)
 * ---> The Promise constructor takes in a function with two parameters: resolve and reject
 * ---> The resolve parameter is a function that is called when the Promise is resolved => (say a successful API call)
 * ---> The reject parameter is a function that is called when the Promise is rejected (say a failed API call)
 * ---> Let's throw a flag if the user enters a string instead of a number as setTimeout() takes in a number as a parameter
 * ---> Here is how to create a Promise object using the constructor
 */

const delay = (milliseconds: any): Promise<string> => {

    // Creating a Promise object using the Promise constructor
    const result= new Promise<string>((resolve, reject) => {

        if (Number.isNaN(milliseconds))  {//parseInt() will return NaN if the user enters a string instead of a number
             //pass the value you want the Promise to return when the operation is unsuccessful to the reject() function
            reject(`Promise rejected: It seems like you did not entered a number`);
            //when we fall into the reject() function, the Promise constructor will return whatever value we pass to reject()
        }
    
        // Using setTimeout to introduce a delay; takes in the function to be ran 
        //- and the delay in milliseconds before running the function
        setTimeout(() => {
            
            // Resolving the Promise with a success message
            // Pass the value you want the Promise to return to the resolve function when the operation is successful
            resolve(`Promise resolved after ${milliseconds}ms`);
    
        }, milliseconds);

        
        
        });

    return result
  };

/**
 * Now, since Promises can potentially fail, we need to handle that failure.
 * There are a few ways to do this but the easiest is to use the try catch block and await/async keyword.
 * The try...catch block is used to handle errors in synchronous code.
 * When you have asynchronous code, you need to use the await/awaits keyword inside the try block.
 * the catch block will also handle the reject() functions of all your Promises in the try block.
 */

const delayWithTryCatch = async (): Promise<string> => {
    
    try{
        //wait for the user to enter a number (delay in ms)
        const input=await Input.Input('Enter desired delay (number): ');

        //wait for the delay function to resolve; 
        //the user might enter a string instead of a number;
        //needs to be handled as parseInt() will return NaN in that case
        //see the delay() function for more details
        const result=await delay(parseInt(input));
        
        return result;

    }catch(err){//catches any error that occurs in the try block
        //ex: if the user enters a string instead of a number-> delay() will return a rejected Promise
        //    and the catch block will catch it
        return ('This error just happened: '+ err)
        

    }
    
}
//Execution: (uncomment the lines bellow to run the code)
//const awaitedString=await delayWithTryCatch()
//console.log(awaitedString)


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/**Time TO EXERCISE:


1. Create a function which asynchronously asks the user to enter a number 

2. -and returns a Promise (using the Promise constructor) with the entered number 

3. -if the user enters a string or a even number, the Promise should be rejected (use the isNaN() function to check if the entered value is a number)

4. -create a main function which calls the function you created in step 1-Use the try...catch block to handle the Promise rejection
*/
//console.log(await delayWithTryCatch())

Input.closeStream();
  
