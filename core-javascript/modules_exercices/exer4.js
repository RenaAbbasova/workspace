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
    console.log(i);
} */

// 1.4. Dibujar un cuadrado por pantalla    

/* function square(size) {
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let k = 0; k < size; k++) {
            row += '*'
        }
        console.log(row);
    } 

}

square(10); */

/* for (let i = 0, k = 6 ; i < 6; i++, k--) {
    console.log('*'.repeat(i) +  '*'.repeat(k));
}  */

// 1.6. Imprimir por pantalla las tablas de multiplicar del 0 al 9

/* for (let i = 0; i <= 10; i++) {
    for (let k = 0; k <= 10; k++) {
        
        console.log(`${i} x ${k} = ${i * k}`);
    }
    console.log('*-------------------*')
}


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


// Imprimir rombo

/* for(let i = 1; i <= 5; i++) {
    console.log(' '.repeat(5-i) + '*'.repeat(i * 2 - 1));}
    for (let k = 4; k >= 1; k--) {
        console.log(' '.repeat(5 - k) + '*'.repeat(k * 2 - 1 ));
    } */

 // 12. Write a JavaScript program to sum 3 and 5 multiples under 1000.


