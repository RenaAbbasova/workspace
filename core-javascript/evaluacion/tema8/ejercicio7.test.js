const StringTransform = require('./ejercicio7'); 

describe('StringTransform', () => {
    test('convertToArray should convert string to array of characters', () => {
        const transform = new StringTransform('Buenos Dias');
        expect(transform.convertToArray()).toEqual(['B', 'u', 'e', 'n', 'o', 's', ' ', 'D', 'i', 'a', 's']);
    });

    test('ordenAleatoria should return a random order of characters', () => {
        const transform = new StringTransform('Hola Mundo');
        const result = transform.ordenAleatoria();
        expect(result.length).toBe(10); // Check length is correct
        expect(result).toMatch(/[HhOoLlAa \sMmUuNnDdOo]/g); // Check that it contains the same characters
    });

    test('inversionString should reverse the characters in the string', () => {
        const transform = new StringTransform('Buen dia');
        expect(transform.inversionString()).toBe('aid neuB');
    });

    test('quitarVocales should remove all vowels from the string', () => {
        const transform = new StringTransform('I like running');
        expect(transform.quitarVocales()).toBe(' lk rnnng');
    });

    test('quitarConsonantes should remove all consonants from the string', () => {
        const transform = new StringTransform('Buenos Dias');
        expect(transform.quitarConsonantes()).toBe('ueo ia');
    });

    test('arrayPalabras should convert string to array of words', () => {
        const transform = new StringTransform('Hola Mundo');
        expect(transform.arrayPalabras()).toEqual(['Hola', 'Mundo']);
    });

    test('inversionPalabras should reverse the order of words in the string', () => {
        const transform = new StringTransform('Have a nice day');
        expect(transform.inversionPalabras()).toBe('day nice a Have');
    });
});
