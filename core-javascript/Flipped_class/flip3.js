/* function product(num1, num2, num3) {
    if (num1 === 0 || num2 === 0 || num3 === 0) {
        console.log("The sign is neutral (0)"); // Clarified message for zero case
    } else if (num1 < 0 && num2 < 0 && num3 < 0) {
        console.log("The sign is -");
    } else if (num1 > 0 && num2 > 0 && num3 > 0) {
        console.log("The sign is +");
    } else if (num1 > 0 && num2 < 0 && num3 < 0) {
        console.log("The sign is +");
    } else if (num1 < 0 && num2 < 0 && num3 > 0) {
        console.log("The sign is +");    
    } else {
        console.log("The sign is -");
    }
}
 */
/* // Testing the function
product(3, -7, 2);   
product(-5, 0, 0);    
product(3, 7, -2); 
product(-3, -7, 2);   
product(5, -1, -2);    
product(-3, -7, -2);
product(1,4,5)
product(0, 0, 0);   
product(0,-5,1); */


/* 

function descending(num1,num2,num3) {
   
    return sample.sort((a, b) => b - a);  // Sort array in descending order
}

console.log(descending([5, 2, 9, 1, 7])); // Output: [9, 7, 5, 2, 1]
console.log(descending([]));              // Output: []
console.log(descending("test"));          // Output: Input is not an array



let num1 = 0;
let num2 = -1;
let num3 = 4;

function descending (num1, num2, num3) {
    if (num1 > num2 && num2 > num3) {
        console.log(num1 + ',' + num2 + ',' + num3)

    } else if (num2 > num1 && num1 > num3) {
        console.log(num2 + ',' + num1 + ',' + num3)

    } else if (num3 > num1 && num1 > num2) {
        console.log(num3 + ',' + num1 + ',' + num2)

    } else if (num3 > num2 && num2 > num1) {
        console.log(num3 + ',' + num2 + ',' + num1)
    
     } else if (num2 > num3 && num3 > num1) {
        console.log(num2 + ',' + num3 + ',' + num1)    
    
    } else {
        console.log(num1 + ',' + num3 + ',' + num2)
    }

}

descending(4,-4,0) */

/* class Rueda {
    constructor() {
        this.diameter = parseFloat(prompt("Introduce el diámetro de la rueda en metros:"));
        this.grosor = parseFloat(prompt("Introduce el grosor de la rueda en metros:"));
    }

    validarDiameter() {
        if (this.diameter > 1.4) {
            console.log("La rueda es para un vehículo grande");
        } else if (this.diameter <= 1.4 && this.diameter > 0.8) {
            console.log("La rueda es para un vehículo mediano");
        } else {
            console.log("La rueda es para un vehículo pequeño");
        }
    }

    validarGrosor() {
        if ((this.diameter > 1.4 && this.grosor < 0.4) || (this.diameter <= 1.4 && this.diameter > 0.8 && this.grosor < 0.25)) {
            console.log("El grosor para esta rueda es inferior al recomendado");
        }
    }

    validarRueda() {
        this.validarDiameter();
        this.validarGrosor();
    }
}

// Crear una instancia de la clase y validar los valores
const miRueda = new Rueda();
miRueda.validarRueda();
 */

/* class Rueda {
    constructor() {
        this.diameter = parseFloat(prompt("Introduce el diámetro de la rueda en metros:"));
        this.grosor = parseFloat(prompt("Introduce el grosor de la rueda en metros:"));
    }

    validar() {
        console.log(this.diameter > 1.4 ? "La rueda es para un vehículo grande" :
                    this.diameter > 0.8 ? "La rueda es para un vehículo mediano" :
                    "La rueda es para un vehículo pequeño");

        if ((this.diameter > 1.4 && this.grosor < 0.4) || 
            (this.diameter <= 1.4 && this.diameter > 0.8 && this.grosor < 0.25)) {
            console.log("El grosor para esta rueda es inferior al recomendado");
        }
    }
}

new Rueda().validar();  */
 

/* // Pedir al usuario el diámetro y grosor de la rueda
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


/* class Rueda {
    constructor() {
        this.diameter = parseFloat(prompt("Introduce el diámetro de la rueda en metros:"));
        this.grosor = parseFloat(prompt("Introduce el grosor de la rueda en metros:"));
    }

    validar() {
        if (isNaN(this.diameter) || isNaN(this.grosor)) return console.log("Introduce valores numéricos válidos.");
        
        console.log(this.diameter > 1.4 ? "Vehículo grande" :
                    this.diameter > 0.8 ? "Vehículo mediano" :
                    "Vehículo pequeño");

        if ((this.diameter > 1.4 && this.grosor < 0.4) || 
            (this.diameter <= 1.4 && this.diameter > 0.8 && this.grosor < 0.25)) {
            console.log("Grosor inferior al recomendado");
        }
    }
}

new Rueda().validar();
 */

