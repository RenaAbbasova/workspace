 // Página web ejecutada en bucle infinito que pregunta por una multiplicación y te responde con la solución mientras te vuelve a preguntar de nuevo.

 function bucleinfinito() {
    while (true) {
        let num1 = prompt('Introduce el primer número:');
        let num2 = prompt('Introduce el segundo numero:');
    
        if (!isNaN(num1) && !isNaN(num2)) {
        alert(`${num1} x ${num2} = ${num1 * num2}`);
        } else {
            alert(`Introduce el numero correcto`);
    }
  }
}

// Asignar el evento al botón después de que el DOM se haya cargado
document.getElementById('startButton').addEventListener('click', bucleinfinito);