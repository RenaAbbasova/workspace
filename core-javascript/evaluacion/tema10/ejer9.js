/* //8. Crea un cronómetro en una página web (muy simple, sólo minutos ysegundos) 
/* 9. Sobre el ejercicio anterior, haz que con el click del ratón se pueda parar
o continuar el tiempo. (No hace falta controlar el momento en el que se
para el tiempo a la hora de volver a empezar)  */

let tiempoRef = Date.now();
let acumulado = 0;

const timerState = {
    cronometrar: true,
};

// Function to format milliseconds to MM:SS
function formatearMS(ms) {
    let seconds = Math.floor((ms / 1000) % 60);
    let minutes = Math.floor((ms / (1000 * 60)) % 60);

    // Adding leading zeros
    const ceros = (num) => String(num).padStart(2, '0');
    return `${ceros(minutes)}:${ceros(seconds)}`;
}

// Function to start the timer interval
function startTimer() {
    const tiempo = document.getElementById("tiempo");
    if (!tiempo) return;
    

    setInterval(() => {
        if (timerState.cronometrar) {
            acumulado = Date.now() - tiempoRef; // Update elapsed time
        }
        tiempo.innerHTML = formatearMS(acumulado); // Update displayed time
    }, 1000 / 60); // 60 FPS

    tiempo.addEventListener('click', toggleTimer); // Attach click event
}

// Function to toggle start/stop
function toggleTimer() {
    if (timerState.cronometrar) {
        timerState.cronometrar = false; // Stop the timer
    } else {
        tiempoRef = Date.now() - acumulado; // Adjust start time
        timerState.cronometrar = true; // Start the timer
    }
}

// Event listener to start the timer when DOM is loaded
if (typeof document !== 'undefined') {
    document.addEventListener("DOMContentLoaded", startTimer);
}

// Exporting functions for testing
module.exports = { formatearMS, startTimer, toggleTimer, timerState };
