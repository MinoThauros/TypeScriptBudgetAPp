import * as readline from 'readline';
export const terminalInput = async (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
        rl.close();
    });
};
//# sourceMappingURL=utils.js.map