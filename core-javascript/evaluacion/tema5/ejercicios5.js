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
function AreaCirculo(radio, pi = 3.14) {

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
}


