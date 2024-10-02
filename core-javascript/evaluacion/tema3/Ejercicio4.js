// Definir la clase 
class Rueda {
    constructor() {
        this.diameter = parseFloat(prompt("Introduce el diámetro de la rueda en metros:"));
        this.grosor = parseFloat(prompt("Introduce el grosor de la rueda en metros:"));
    }

    // Método para validar las dimensiones
    validar() {
        const resultadoDiv = document.getElementById('resultado');
        let mensaje = '';

        if (isNaN(this.diameter) || isNaN(this.grosor)) {
            mensaje += "Introduce valores numéricos válidos.<br>";
        } else {
            mensaje += this.diameter > 1.4 ? "La rueda es para un vehículo grande<br>" :
                       this.diameter > 0.8 ? "La rueda es para un vehículo mediano<br>" :
                       "La rueda es para un vehículo pequeño<br>";

            // Comprobar si el grosor es inferior al recomendado
            if ((this.diameter > 1.4 && this.grosor < 0.4) || 
                (this.diameter <= 1.4 && this.diameter > 0.8 && this.grosor < 0.25)) {
                mensaje += "El grosor para esta rueda es inferior al recomendado<br>";
            }
        }

        // Mostrar el mensaje en el contenedor HTML
        resultadoDiv.innerHTML = mensaje;
    }
}

// Crear una nueva instancia de Rueda y validar los datos
new Rueda().validar();
