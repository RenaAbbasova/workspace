// 1. Define con una función recursiva cómo calcularías la serie de Fibonacci.

/* function Fibonacci(num) {
    if (num === 1 || num === 0) {
        return num;
    } else {
        return Fibonacci (num -1) +  Fibonacci(num - 2) 
    }
}
console.log(Fibonacci(3)); */

// 2. Define una función que al clicar el botón del ratón la llames y te escriba
// en la página un saludo

/* function saludar() {
    document.getElementById('greeting').innerText = '!Hola, me alegro de verte!';
    console.log('Función saludar ejecutada');
} */

// 3. Crea una función que convierta de Farenheit a Celsius, y si quieres que
// convierta de Celsius a Farenheit, y otra tercera que haga las dos cosas
// dependiendo el input.    


/* function Celsius(F) {
    return (5/9) * (F - 32)
}
console.log(Celsius(60));

function Farenheit(C) {
    return (9/5 * C) + 32
}
console.log(Farenheit(15));

function temperatura(t, type) {
    if (type === 'Celsius') {
        return Celsius(t);
    } else if (type === 'Farenheit') {
        return Farenheit(t);
    } else {
        return 'No valid conversion'
    }
        
}
console.log(temperatura(60, 'Celsius'));
console.log(temperatura(5, 'Farenheit'));
console.log(temperatura(100, 'Kelvin')); */

// 4. Una función que pida una dirección de email y valide si la dirección es
// correcta o no.

// 10.Crea una función que te devuelva el área de un círculo.
/* function AreaCirculo(radio, pi = 3.14) {

    if(radio > 0) {
        return  pi * (radio ** 2); 
    } else {
        return " el radio debe ser mayor que 0";
    }
    
} 
console.log(AreaCirculo(5));

//11.Crea una función que te devuelva el área de un rectángulo y de un triángulo

function rectangulo(altura, anchura) {
    return altura * anchura 
} */


function* generateSequence(num) {
    if(num===0 || num===1) {
        yield num
    } else {
        yield generateSequence(num-1) + generateSequence(num-2)
    }
}
let generador = generateSequence()
for (let value of generador) {
    console.log(value);
}

function* generateSequence(num) {
    let a = 0;
    let b = 1;

    for (let i = 0; i < num; i++) {
        yield a; // Devuelve el valor actual de la secuencia
        [a, b] = [b, a + b]; // Actualiza los valores para la próxima iteración
    }
}



function* generateFibonacciUsingFormula(num) {
    const phi = (1 + Math.sqrt(5)) / 2; // Número áureo
    const psi = (1 - Math.sqrt(5)) / 2; // Valor complementario

    for (let n = 0; n < num; n++) {
        const fibonacciNumber = Math.round((Math.pow(phi, n) - Math.pow(psi, n)) / Math.sqrt(5));
        yield fibonacciNumber; // Devuelve el número de Fibonacci calculado
    }
}

// Usar el generador para obtener los valores de la secuencia de Fibonacci
let generador = generateFibonacciUsingFormula(10); // Generará los primeros 10 números de Fibonacci
for (let value of generador) {
    console.log(value); // Imprime cada número de Fibonacci uno por uno
}



