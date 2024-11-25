import Comparator from './Comparator.js';

// Ejemplo 1: Usando la función de comparación predeterminada.
const comparator = new Comparator();

// Comparando números.
console.log(comparator.equal(5, 5));           // true, porque 5 es igual a 5.
console.log(comparator.lessThan(3, 5));       // true, porque 3 es menor que 5.
console.log(comparator.greaterThan(7, 2));    // true, porque 7 es mayor que 2.

// Ejemplo 2: Usando una función de comparación personalizada.
// Comparamos cadenas por longitud en lugar del valor alfabético.
const customComparator = new Comparator((a, b) => a.length - b.length);

console.log(customComparator.lessThan('apple', 'banana')); // true, porque "apple" (5) < "banana" (6).
console.log(customComparator.greaterThan('grape', 'fig')); // true, porque "grape" (5) > "fig" (3).
console.log(customComparator.equal('pear', 'peach'));      // false, porque "pear" (4) !== "peach" (5).

// Ejemplo 3: Revirtiendo el orden de comparación.
customComparator.reverse();

console.log(customComparator.lessThan('apple', 'banana')); // false, porque el orden se invirtió.
console.log(customComparator.greaterThan('grape', 'fig')); // false, porque el orden se invirtió.

