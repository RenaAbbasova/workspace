function fizzBuzz(number) {
    // Check if input is a valid number
    if (typeof number !== 'number' || isNaN(number)) {
        return 'Invalid input';
    }

    if (number % 3 === 0 && number % 5 === 0) {
        return 'fizzbuzz';
    } else if (number % 3 === 0) {
        return 'fizz';
    } else if (number % 5 === 0) {
        return 'buzz';
    } else {
        return number.toString();
    }
}
console.log(fizzBuzz(0))

module.exports = fizzBuzz;



