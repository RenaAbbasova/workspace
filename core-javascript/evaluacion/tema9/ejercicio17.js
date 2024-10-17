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



// Custom error classes for better error handling
class StringTypeError extends TypeError {
    constructor(message) {
        super(message);
        this.name = 'StringTypeError';
    }
}

class ValueError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValueError';
    }
}

// capitalize_last_name function 
function capitalize_last_name(string) {
    
    if (typeof string !== 'string') {
        throw new StringTypeError('El argumento debe ser un string');
    }


    const words = string.split(/\s+/).filter(Boolean);  

   
    if (words.length !== 2) {
        throw new ValueError('El string debe contener exactamente dos palabras');
    }

    // Capitalize the first letter of the first name and convert the last name to uppercase
    const firstname = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
    const lastname = words[1].toUpperCase();

  
    return `${firstname} ${lastname}`;
}

// Export the function and error classes for use in tests
module.exports = { capitalize_last_name, StringTypeError, ValueError };




