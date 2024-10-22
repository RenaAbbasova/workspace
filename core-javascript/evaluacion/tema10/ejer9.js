

let interval;
let isRunning = false;
let startTime = 0;
let elapsedTime = 0;

// Función para iniciar o pausar el cronómetro con un clic
function toggleCronometro() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime; // Ajustar el tiempo de inicio para continuar
        interval = setInterval(updateCronometro, 1000); // Actualiza cada segundo
        isRunning = true;
    } else {
        clearInterval(interval); // Pausar el cronómetro
        isRunning = false;
    }
}

// Función para reiniciar el cronómetro
function resetCronometro() {
    clearInterval(interval);
    isRunning = false;
    startTime = 0;
    elapsedTime = 0;
    document.getElementById('cronometro').textContent = '00:00';
}

// Función para actualizar el cronómetro cada segundo
function updateCronometro() {
    elapsedTime = Date.now() - startTime;

    const totalSeconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('cronometro').textContent = `${formattedMinutes}:${formattedSeconds}`;
}

// Manejo del clic en el cronómetro para iniciar/pausar el cronómetro
document.getElementById('cronometro').addEventListener('click', toggleCronometro);

// Botón para reiniciar el cronómetro
document.getElementById('resetButton').addEventListener('click', resetCronometro);



/* 9. Sobre el ejercicio anterior, haz que con el click del ratón se pueda parar
o continuar el tiempo. (No hace falta controlar el momento en el que se
para el tiempo a la hora de volver a empezar)  */