/* 1.7 Crea una clase para trabajar diferentes transformaciones de un string inicial con diferentes métodos:
- Conversión de todo el string a array de caracteres uno por uno
- La ordenación de los caracteres de manera aleatoria
- La inversión del orden de caracteres
- Quitar las vocales
- Quitar las consonantes.
- Array de palabras
- Inversión del orden de las palabras del string */


class StringTransform {
    constructor(string) {
        this.string = string; 
    } 

    // Convert the string to an array of characters
    convertToArray() {
        return this.string.split('');
    } 

    // Shuffle the characters in a random order
    ordenAleatoria() {
        return this.string
            .split('')
            .sort(() => Math.random() - 0.5)
            .join(''); 
    } 

    // Reverse the order of characters
    inversionString() {
        return this.string.split('').reverse().join('');
    } 

    // Remove all vowels from the string
    quitarVocales() {
        return this.string.replace(/[aeiouAEIOU]/g, '');
    } 

    // Remove all consonants from the string
    quitarConsonantes() {
        return this.string.replace(/[^aeiouAEIOU\s]/g, '');
    } 

    // Convert the string to an array of words
    arrayPalabras() { 
        return this.string.split(' ');
    } 

    // Reverse the order of words in the string
    inversionPalabras() {
        return this.string.split(' ').reverse().join(' ');
    }
}

module.exports = StringTransform; 
