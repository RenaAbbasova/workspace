const fizzBuzz = require('./fizzbuzz');

describe('FizzBuzz Function', () => {
    test('should return "fizz" if the number is divisible by 3', () => {
        expect(fizzBuzz(6)).toBe('fizz');
    });

    test('should return "buzz" if the number is divisible by 5', () => {
        expect(fizzBuzz(10)).toBe('buzz');
    });

    test('should return "fizzbuzz" if the number is divisible by both 3 and 5', () => {
        expect(fizzBuzz(30)).toBe('fizzbuzz');
    });

    test('should return the number as a string if it is not divisible by 3 or 5', () => {
        expect(typeof fizzBuzz(22)).toBe("string");
        expect(fizzBuzz(22)).toBe("22");
    });

    test('should return "fizzbuzz" for the number 0 (since it is divisible by both 3 and 5)', () => {
        expect(fizzBuzz(0)).toBe('fizzbuzz');
    });

    test('should handle non-numeric input gracefully', () => {
        expect(fizzBuzz('string')).toBe('Invalid input');
        expect(fizzBuzz(null)).toBe('Invalid input');
        expect(fizzBuzz(undefined)).toBe('Invalid input');
    });
});



