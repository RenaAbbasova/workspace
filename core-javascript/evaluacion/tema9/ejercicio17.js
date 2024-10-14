/* 17.Define a function capitalize_last_name() that accepts as argument
a string with a (single) first and a (single) last name, and returns a
string in which only the first letter of the first name is uppercase,
whereas all letters of the last name are uppercase; in otherwords,
'marisa tomei' becomes 'Marisa TOMEI'. (Tip: use str.split() to split
a str into separate words.) If something other than a str object is
passed as an argument, the function should raise a TypeError. (Tip:
you can use isistance() to check whether an object is of a particular
type.) If the str does not consist of exactly two words, the function
should raise a ValueError. */

function capitalize_last_name(string) {
    // Verificar que el argumento sea de tipo string
    if (typeof string !== 'string') {
        throw new TypeError('El argumento debe ser un string');
    }

    // Dividir el string en palabras
    const words = string.split(' ');

    // Verificar que el string tenga exactamente dos palabras
    if (words.length !== 2) {
        throw new Error('El string debe contener exactamente dos palabras');
    }

    // Capitalizar la primera letra del primer nombre y convertir el apellido a mayúsculas
    const firstname = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
    const lastname = words[1].toUpperCase();

    // Devolver el resultado con el formato adecuado
    return `${firstname} ${lastname}`;
}

// Ejemplos de uso
console.log(capitalize_last_name('marisa tomei')); // 'Marisa TOMEI'
console.log(capitalize_last_name('Rena Abbasova'));     // 'John DOE'

