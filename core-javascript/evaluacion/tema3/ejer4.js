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
};



// 2. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
// ample numbers : 3, -7, 2
// Output : The sign is -

function product(num1, num2, num3) {
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

// Testing the function
product(3, -7, 2);   
product(-5, 0, 0);    
product(3, 7, -2); 
product(-3, -7, 2);   
product(5, -1, -2);    
product(-3, -7, -2);
product(1,4,5)
product(0, 0, 0);   
product(0,-5,1);


// 5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
//"0 is even"
//"1 is odd"
//"2 is even"

for (let i = 0; i <= 15; i++) {
    if(i %2 == 0) {
        console.log(`${i} is even`);

    } else {
        console.log(`${i} is odd`);
    }
}

