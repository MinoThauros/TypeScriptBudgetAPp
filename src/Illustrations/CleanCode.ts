//1) Variable name
// Good use of meaningful and clear variable and function names. 
//This makes the code readable and easy to understand.
let customerAge: number = 25;

/**
 * Function to calculate the discount based on customer's age
 * @param {number} customerAge - The age of the customer
 * @returns {number} - The discount rate
 */
function calculateDiscount1(customerAge: number): number {
    if (customerAge > 60) {
        return 0.1;
    } else {
        return 0;
    }
}
//----------------------------------------------------------------------------------------------

//2) Resuability, always !!
// By using constant instead of magic number, the code becomes easier to read and understand.
// It also avoids potential mistakes if the value has to be changed in the future.
const RETIREMENT_AGE = 60;

/**
 * Function to calculate the discount based on customer's age
 * @param {number} customerAge - The age of the customer
 * @returns {number} - The discount rate
 */
function calculateDiscount2(customerAge: number): number {
    if (customerAge > RETIREMENT_AGE) {
        return 0.1;
    } else {
        return 0;
    }
}
//----------------------------------------------------------------------------------------------

//3) Single responsibility principle: each function should do one thing and do it well
//-->So if your code fails somewhere, you know exactly where to look.
//-->Each function has a single responsibility. This makes the code easier to read, test, and maintain.
//-->Like blocs of lego, you can reuse them in different places as long as their use is well defined. 

/**
 * Function to check if the customer is retired based on their age
 * @param {number} customerAge - The age of the customer
 * @returns {boolean} - Whether the customer is retired or not
 */
function isRetired(customerAge: number): boolean {
    return customerAge > RETIREMENT_AGE;
    //a logical check in JavaScript/TypeScript 
    //vs writing an if statement and returning true/false
}

/**
 * Function to calculate the discount based on whether the customer is retired or not
 * @param {boolean} isRetired - Whether the customer is retired or not
 * @returns {number} - The discount rate
 */
function calculateDiscount(isRetired: boolean): number {
    return isRetired ? 0.1 : 0;
    //ternary operator; another style of writing an if statement
}
//----------------------------------------------------------------------------------------------

//4) Use Typescript and its type system to your advantage
//-->Including custom, reusable types
// TypeScript's static type system can help prevent many potential runtime errors 
//--as errors can be caught while writing the code.
interface Customer {
    name: string;
    age: number;
}

/**
 * Function to greet a customer
 * @param {Customer} customer - An object containing customer details
 */
function greetCustomer(customer: Customer) {
    console.log(`Hello, ${customer.name}`);
}