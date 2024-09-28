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