class StringTransform {
    constructor(string) {
        this.string = string; 
    } 

    // Conversión de todo el string a array de caracteres uno por uno
    convertToArray() {
        return this.string.split('');
    } 

    // Ordenación de los caracteres de manera aleatoria
    ordenAleatoria() {
        return this.string
            .split('')
            .sort(() => Math.random() - 0.5)
            .join(''); // Unimos de nuevo el array en un string
    } 

    // Inversión del orden de caracteres
    inversionString() {
        return this.string.split('').reverse().join('');
    } 

    // Quitar las vocales
    quitarVocales() {
        return this.string.replace(/[aeiouAEIOU]/g, '');
    } 

    // Quitar las consonantes
    quitarConsonantes() {
        return this.string.replace(/[^aeiouAEIOU\s]/g, ''); // Elimina todo excepto vocales y espacios
    } 

    // Conversión del string a un array de palabras
    arrayPalabras() { 
        return this.string.split(' ');
    } 

    // Inversión del orden de las palabras del string
    inversionPalabras() {
        return this.string.split(' ').reverse().join(' ');
    }
}

// Ejemplo de uso de la clase
const transform = new StringTransform('Hola Mundo');

console.log(transform.convertToArray()); // ['H', 'o', 'l', 'a', ' ', 'M', 'u', 'n', 'd', 'o']
console.log(transform.ordenAleatoria()); // Ejemplo: 'loHo adunM' (puede variar)
console.log(transform.inversionString()); // 'odnuM aloH'
console.log(transform.quitarVocales()); // 'Hl Mnd'
console.log(transform.quitarConsonantes()); // 'oa uo'
console.log(transform.arrayPalabras()); // ['Hola', 'Mundo']
console.log(transform.inversionPalabras()); // 'Mundo Hola'


