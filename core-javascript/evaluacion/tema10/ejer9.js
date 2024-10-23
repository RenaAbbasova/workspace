//8. Crea un cronómetro en una página web (muy simple, sólo minutos ysegundos) 
/* 9. Sobre el ejercicio anterior, haz que con el click del ratón se pueda parar
o continuar el tiempo. (No hace falta controlar el momento en el que se
para el tiempo a la hora de volver a empezar)  */


let tiempoRef = Date.now();
let cronometrar = true; // Start in paused state
let acumulado = 0;

// Update the display every 60 frames per second
setInterval(() => {
    let tiempo = document.getElementById("tiempo");
    if (cronometrar) {
        acumulado = Date.now() - tiempoRef;
    }
    tiempo.innerHTML = formatearMS(acumulado);
}, 1000 / 60);

// Function to format milliseconds to MM:SS
function formatearMS(ms) {
    let S = Math.floor((ms / 1000) % 60);
    let M = Math.floor((ms / (1000 * 60)) % 60);

    // Helper function to add leading zeros
    Number.prototype.ceros = function(n) {
        return (this + "").padStart(n, "0");
    };

    return M.ceros(2) + ":" + S.ceros(2);
}

// Toggle start/stop on click
document.getElementById('tiempo').addEventListener('click', () => {
    if (!cronometrar) {
        // Start the timer
        tiempoRef = Date.now() - acumulado; // Adjust start time to continue from where it was
        cronometrar = true;
    } else {
        // Stop the timer
        cronometrar = false;
    }
});

// Export the function for testing
module.exports = { formatearMS };