// Imprimir los números del 1 al 100 de uno en uno como alerta

/* for (let i = 1; i <= 100; i++) {
    alert(i);

} */

//1.2.Imprimir sólo los números pares del 1 al 100 en log de consola

/* for (let i = 1; i <= 100; i++) {
    if (i%2 == 0) {
        console.log(i);
    }
} */

// 1.3.Imprimir sólo los números múltiplos de 20 del 1 al 1000 por pantalla

/* for (let i = 20; i <= 1000; i+=20) {
    alert(i);
} */

// 1.4. Dibujar un cuadrado por pantalla    

/* function square(size) {
    let squareHTML = '';
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let k = 0; k < size; k++) {
            row += '* '
        }
        squareHTML += row + '<br>'
    document.getElementById('square').innerHTML = squareHTML;
    } 

}

square(10); */


// 1.5 Imprimir rombo
/* let diamondHTML = '';
for(let i = 1; i <= 5; i++) {
    diamondHTML += ' '.repeat(5-i).replace(/ /g, '&nbsp') + '*'.repeat(i * 2 - 1) + '<br>';}

    for (let k = 4; k >= 1; k--) {
        diamondHTML += ' '.repeat(5 - k) + '*'.repeat(k * 2 - 1 ) + '<br>';}

document.getElementById('diamond').innerText = diamondHTML;    
 */

//document.getElementById('startButton').addEventListener('click', function() {
/*    // let size = 5;  // Tamaño del rombo
    let diamondHTML = '';  // Para almacenar el rombo

    // Parte superior del rombo
    for (let i = 1; i <= 5; i++) {
        diamondHTML += '&nbsp;'.repeat(5 - i) + '*'.repeat(i * 2 - 1) + '<br>';  // Genera la parte superior
    }

    // Parte inferior del rombo
    for (let k = 4; k >= 1; k--) {
        diamondHTML += '&nbsp;'.repeat(5 - k) + '*'.repeat(k * 2 - 1) + '<br>';  // Genera la parte inferior
    }

    // Insertar el rombo en el div del HTML
    document.getElementById('diamond').innerHTML = diamondHTML;
}); */

// 1.6. Imprimir por pantalla las tablas de multiplicar del 0 al 9
// Generar y mostrar la tabla de multiplicar


/* 
document.getElementById('startButton').addEventListener('click', function() {
let multiHTML = ''; 
for (let i = 0; i <= 9; i++) { // Para las tablas del 0 al 9
    multiHTML += `<h3>Tabla del ${i}</h3>`; // Título para cada tabla
    for (let k = 0; k <= 10; k++) {
        multiHTML += `${i} x ${k} = ${i * k}<br>`; // Añadir cada multiplicación
    }
    multiHTML += '<hr>'; // Línea separadora entre tablas
}

// Insertar la tabla de multiplicar en el div del HTML
document.getElementById('multiplication').innerHTML = multiHTML; 
}); */

// 1.8. Preguntar un número por input, después, imprimir todos los números impares hasta él


/* let numberinput = window.prompt('Introduce number:');
let number = parseInt(numberinput)

if (!isNaN(number) &&  number > 0) {
    for (let i = 1; i <= number; i++) {
    if(i%2 != 0) {
        alert(i);
    }
    
  }

} else {
    alert('Por favor , introduce valido y mayor que 0.');
} */


// 1.9. Preguntar un número de números a introducir, después, preguntar por esos números, por último, sacar por pantalla la suma de los mismos.


// 1.10. Preguntar por pantalla que se introduzca un número o un texto, si es número se buscan todos los divisores del mismo y si es texto se
// escribe cada uno de los caracteres en un salto de línea.

/* let input = window.prompt('Introduce numero or un texto:');
 if (!isNaN(input) && input.trim() !== "") {
    let number = parseInt(input);
    for (let i = 1 ; i <= number; i++) {
        if(number % i == 0) {
            alert(i);
        }
    }

} else if (input.trim() !== "") {
    for (let i = 0; i < input.length; i++) {
        alert(input[i]);
    }
        
 } else {
    alert ('Please, introduce valid number or not empty string');
 } */

// 1.11.Preguntar por pantalla un número entero y que se imprima por
//pantalla un triángulo tipo:
/* let input = window.prompt('Introduce whoole number');
let number = parseInt(input);

if (!isNaN(number) && number > 0) {
    let triangle = "";
 
    for(let i = 1; i <= number; i++) {
        let row = "";
        for(let k = i; k >= 1; k--) {
            row += (2 * k - 1);
            
        }
        triangle += row + "\n";
        
        
    } 
    alert(triangle);
} else {
    alert('Introduce valid number')
} */

// 1.12.Preguntar al usuario que escriba un texto, después que lo muestre de manera invertida (al revés)