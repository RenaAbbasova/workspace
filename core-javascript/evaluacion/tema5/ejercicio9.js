/* 9. Escribir la función titulo(), la cual recibe un string y lo retorna convirtiendo la primera letra de cada palabra a mayúscula y las demás letras a minúscula, dejando inalterados los demás caracteres. Precondición: el
separador de palabras es el espacio: " " */


function title() {
    let stringinput = window.prompt('Write a string, and I will convert the first letter of each word to uppercase and the rest to lowercase.');

    let word = stringinput.split(' ');

    let newword = word.map(currentword => {
        return currentword.charAt(0).toUpperCase() + currentword.slice(1).toLowerCase()});
    let newstring = newword.join(' ');

    alert(`Here is the new string: ${newstring}`);
}   

title();




