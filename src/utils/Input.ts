import * as readline from 'readline';

async function consoleInput(prompt: string, rl: readline.Interface): Promise<string> {
    return new Promise((resolve) => {
      rl.question(prompt, (answer:string) => resolve(answer));
    });
  }
/**
 * This class is used to get input from the console
 * @method Input: Allows the user to input data into the console
 * @method closeStream: Closes the input stream; call this when you are done using the Input() method in your file
 */
export class InputStream {
    
    private readonly rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
    
    /**
     * Shows a prompt in the console and returns the entered data
     * @param consoleData: prompt to be displayed in the console
     * @returns entered data from the console as a string
     */
    readonly Input=async (consoleData:string)=>{
        return consoleInput(consoleData, this.rl)
    }
    /**
     * Closes the input stream; call this when you are done using the Input() method in your file
    */
   
    readonly closeStream=()=>{
        return this.rl.close()
    }
}