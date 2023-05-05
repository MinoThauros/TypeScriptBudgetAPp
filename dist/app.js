import { InputStream } from './utils/Input.js';
const { Input, closeStream } = new InputStream();
const spendings = [];
//initial budget
const targetBudget = {
    fun: 500,
    clothing: 300,
    food: 700,
    telecommunications: 100,
    health_fitness: 200,
};
/**
 * Function which gets all the spendings;
 * use the Input function to ask the user through the console to populate the fields
 * @returns the constructed object from user interaction
 */
async function getSpending() {
    //get the amount; dont forget to transform the inputed string into a float/a number
    const amount = parseFloat(await Input('Enter the amount: '));
    //get the category, the date and the isRecurring; all are of type strings
    const category = await Input('Enter the category (fun, clothing, food, telecommunications, health/fitness): ');
    const date = await Input('Enter the date (YYYY-MM-DD): ');
    const isRecurring = (await Input('Is this a recurring expense? (yes/no): ')).toLowerCase() === 'yes';
    //using  structural typing, return the object containing all those spendings
    console.log({ amount, category, date, isRecurring });
    return { amount, category, date, isRecurring };
}
/**
 * 1) Get the new spending from the user
 * 2) Add new spending to a list/array of spendings
 * 3) Manage the budget by subtracting the spending from the corresponding category
 * 4) Ask if user wishes to add a new spending; if not, log the remainig budget
 */
async function main() {
    while (true) {
        const spending = await getSpending();
        spendings.push(spending);
        manageBudget(spending);
        const anotherSpending = (await Input('Enter another spending? (yes/no): ')).toLowerCase();
        if (anotherSpending !== 'yes') {
            break;
        }
    }
    console.log('Remaining budget:', targetBudget);
    closeStream(); //do not delete this line
}
/**
 * This function takes care of subtracting the spending from the budget category where it belongs
 * P R O  T I P:  you can use .hasOwnProperty() to determine if the targetBudget has the same property with the same specified name
 *                as the incoming object (since you asked the user about which category the )
 * @param spending
 */
function manageBudget(spending) {
    if (targetBudget.hasOwnProperty(spending.category)) {
        targetBudget[spending.category] -= spending.amount;
    }
    else {
        console.log('Invalid category. Budget not updated.');
    }
}
main();
//# sourceMappingURL=app.js.map