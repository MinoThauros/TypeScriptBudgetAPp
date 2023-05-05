import * as readline from 'readline';
async function consoleInput(prompt, rl) {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => resolve(answer));
    });
}
export class InputStream {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        this.Input = async (consoleData) => {
            return consoleInput(consoleData, this.rl);
        };
        this.closeStream = () => {
            return this.rl.close();
        };
    }
}
//# sourceMappingURL=Input.js.map