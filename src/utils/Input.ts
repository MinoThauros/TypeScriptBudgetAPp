import * as readline from 'readline';

async function consoleInput(prompt: string, rl: readline.Interface): Promise<string> {
    return new Promise((resolve) => {
      rl.question(prompt, (answer:string) => resolve(answer));
    });
  }

export class InputStream {
    
    private readonly rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
    
    Input=async (consoleData:string)=>{
        return consoleInput(consoleData, this.rl)
    }

    readonly closeStream=()=>{
        return this.rl.close()
    }
}