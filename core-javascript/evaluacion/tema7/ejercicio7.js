/* 7. Crea un programa que pida un valor de tamaño de array por input y después el número del cuál se van a obtener múltiplos y devuelva un array con el tamaño puesto
de múltiplos de ese número (2, 4 => [4, 8]) */

function multiplesArray(input) {
    const [size, number] = input; // Extraemos el tamaño y el número desde el array de entrada
    return Array.from({ length: size }, (_, index) => (index + 1) * number);
}

// Llamamos a la función pasando un array como único argumento
console.log(multiplesArray([5,5])); 
