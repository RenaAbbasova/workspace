const readline = require('readline');

async function askUserInput() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    const size = parseInt(await new Promise(resolve => rl.question('Enter the size of the array: ', resolve)));
    if (isNaN(size) || size <= 0) {
        rl.close();
        return 'Please enter a valid positive number for the array size.';
    }

    const number = parseInt(await new Promise(resolve => rl.question('Enter a number to get its multiples: ', resolve)));
    if (isNaN(number)) {
        rl.close();
        return 'Please enter valid numbers.';
    }

    const multiplesArray = Array.from({ length: size }, (_, i) => number * (i + 1));
    rl.close();
    return multiplesArray;
}

askUserInput();

module.exports = { askUserInput };
