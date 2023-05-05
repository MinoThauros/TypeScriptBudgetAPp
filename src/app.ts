import {InputStream} from './utils/Input.js';
const {Input,closeStream}=new InputStream()

interface Spending {
  amount: number;
  category: string;
  date: string;
  isRecurring: boolean;
}

const spendings: Spending[] = [];


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
async function getSpending(): Promise<Spending> {//async because you need to await for the Input to return
  //get the amount; dont forget to transform the inputed string into a float/a number
  const amount = parseFloat(await Input('Enter the amount: '));
  //get the category, the date and the isRecurring; all are of type strings
  const category = await Input('Enter the category (fun, clothing, food, telecommunications, health/fitness): ');
  const date = await Input('Enter the date (YYYY-MM-DD): ');
  const isRecurring = (await Input('Is this a recurring expense? (yes/no): ')).toLowerCase() === 'yes';

  //using  structural typing, return the object containing all those spendings
  console.log({ amount, category, date, isRecurring })
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
  closeStream();//do not delete this line
}

/**
 * This function takes care of subtracting the spending from the budget category where it belongs
 * P R O  T I P:  you can use targetBudget.hasOwnProperty('spending.category') to determine if the targetBudget has the same property 
 *                with the same specified name as the incoming object-since the user manually entered the spending through the console, 
 *                there are possibly some typos
 *                => If there is a typo, DO NOT update the budget
 * 1) ensure that the category entered by the user does exist on our spending categories (if it exists in targetBudget)
 * 2) if the category matches those in targetBudget, subbstract from that category
 * 3) if not do not subtract and simply tell the user the budget wasnt updated
 * @param spending 
 */
function manageBudget(spending: Spending) {
  if (targetBudget.hasOwnProperty(spending.category)) {
    targetBudget[spending.category as keyof typeof targetBudget] -= spending.amount;//explain this line further
  } else {
    console.log('Invalid category. Budget not updated.');
  }
}

main();
