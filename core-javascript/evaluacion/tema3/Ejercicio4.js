// Define the Rueda class
class Rueda {
    constructor() {
        this.diameter = parseFloat(prompt("Introduce el diámetro de la rueda en metros:"));
        this.grosor = parseFloat(prompt("Introduce el grosor de la rueda en metros:"));
    }

// Method to validate the dimensions 
    validar() {
        if (isNaN(this.diameter) || isNaN(this.grosor)) return console.log("Introduce valores numéricos válidos.");

        // Determine the size of the diameter and log the result
        console.log(this.diameter > 1.4 ? "Vehículo grande" :
                    this.diameter > 0.8 ? "Vehículo mediano" :
                    "Vehículo pequeño");
        // Check if the thickness is below the recommended value based on the diameter
        if ((this.diameter > 1.4 && this.grosor < 0.4) || 
            (this.diameter <= 1.4 && this.diameter > 0.8 && this.grosor < 0.25)) {
            console.log("Grosor inferior al recomendado");
        }
    }
}

new Rueda().validar();
