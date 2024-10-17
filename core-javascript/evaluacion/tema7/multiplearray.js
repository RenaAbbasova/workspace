const readline = require('readline');

async function askUserInput() {

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    
    const size = parseInt(await new Promise(resolve => rl.question('Enter the size of the array: ', resolve)));
    if (isNaN(size) || size <= 0) return console.log('Please enter a valid positive number for the array size.'), rl.close();

    const number = parseInt(await new Promise(resolve => rl.question('Enter a number to get its multiples: ', resolve)));
    if (isNaN(number)) return console.log('Please enter valid numbers.'), rl.close();

    console.log('The multiples array is: ', Array.from({ length: size }, (_, i) => number * (i + 1)));
    rl.close();
}

askUserInput();

module.exports = { askUserInput };















