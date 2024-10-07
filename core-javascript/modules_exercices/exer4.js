
/* for (let i = 0, k = 6 ; i < 6; i++, k--) {
    console.log('*'.repeat(i) +  '*'.repeat(k));
}  */

/*
 function multiplicationtaable(num) {
    for (let i = 0; i <= num; i++) {
        console.log(`tabla de ${i}:`)
        for (let k = 0; k <= num; k++) {
            console.log(`${i} x ${k} = ${i * k}`)
        }
        console.log('')

    }
}
multiplicationtaable(4); */


/* for (let i = 0; i <= 10; i++) {
    console.log('*'.repeat);
} */

/* // 1.7. Página web ejecutada en bucle infinito que pregunta por una multiplicación y te responde con la solución mientras te vuelve a preguntar de nuevo.
function bucleinfinito() {
    while (true) {
        let num1 = prompt('introduce num1');
        let num2 = prompt('introduce num2');
    }
    if (!isNaN(num1) && !isNaN(num2)) {
        alert(`${num1} x ${num2} = ${num1 * num2}`);
    } else {
        alert(`Please introduce right number`)
    }
}

bucleinfinito(); */



 // 12. Write a JavaScript program to sum 3 and 5 multiples under 1000.


// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results. Sample numbers : -5, -2, -6, 0, -1. Output : 0

// 8. According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), 
// or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers
/* function happynumber() {
    let count = 0; // To keep track of how many happy numbers we've found
    let number = 1; // Start checking from number 1

    function squaresum(number) {
        let numstr = number.toString();
        let sum = 0;
    for (let i = 0; i < numstr.length; i++) {
        let digit = parseInt(numstr[i]);
        sum += digit * digit;
    } 
        return sum;
}

while (count = 5) {

} */

/* 
// Pedir al usuario el diámetro y grosor de la rueda
let diameter = parseFloat(prompt("Introduce el diámetro de la rueda en metros:"));
let grosor = parseFloat(prompt("Introduce el grosor de la rueda en metros:"));

// validar si los datos son válidos
if (isNaN(diameter) || isNaN(grosor)) {
    console.log("Por favor, introduce valores numéricos validos.")
} else { 
    // Condición para el diámetro de la rueda
    if (diameter > 1.4) {
        console.log("La rueda es para un vehículo grande");
    } else if (diameter <= 1.4 && diameter > 0.8) {
        console.log("La rueda es para un vehículo mediano");
    } else {
        console.log("La rueda es para un vehículo pequeño");
    }; 

    // Condiciones para el grosor
    if ((diameter > 1.4 && grosor < 0.4) || (diameter <= 1.4 && diameter > 0.8 && grosor < 0.25)) {
    console.log("El grosor para esta rueda es inferior al recomendado");
    }
}; */



