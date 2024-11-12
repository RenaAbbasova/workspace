// Añadimos un event listener al botón HTML.
const button = document.getElementById('button');
button.addEventListener('click', ajaxCheckWeather);

function ajaxCheckWeather() {
    // Obtenemos la ubicación ingresada por el usuario
    const ubicacion = document.getElementById('location').value;

    // Mostramos la ubicación en el documento HTML
    muestraUbicacion(ubicacion);

    /* LLAMADA AJAX */
    // Usamos la API provista en https://openweathermap.org/current#name
    const appId = "2123b15abf5dbccb4b78d19ccea8dd7d"; // Reemplaza con tu propio AppId si es necesario
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion}&lang=es&appid=${appId}`;

    // Realizamos la llamada AJAX y gestionamos la respuesta o los errores
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo obtener la información del clima. Verifique la ubicación ingresada.");
            }
            return response.json();
        })
        .then(result => responseManager(result))
        .catch(error => alert('Error: ' + error.message));
}

/* Función que gestiona la respuesta de la API */
function responseManager(resp) {
    console.log(resp);
    cambiaIcono(resp.weather[0].icon);
    muestraDesc(resp.weather[0].description);
    muestraUbicacion(resp.name); 
    muestraTemperatura(resp.main.temp);
    muestraHumedad(resp.main.humidity);
    muestraLatLong(resp.coord.lat, resp.coord.lon); // Nueva función para mostrar latitud y longitud
    /* muestraCoordenadas(resp.coord.lat, resp.coord.lon); // Nueva función para coordenadas */
}

/* Funciones auxiliares para cambiar el contenido HTML */

// Cambia el icono del clima
function cambiaIcono(nombreIco) {
    const icono = document.getElementById('icono');
    icono.src = `https://openweathermap.org/img/wn/${nombreIco}@2x.png`;
}

// Muestra la descripción del clima
function muestraDesc(desc) {

    const prev = document.getElementById('previsionTexto');
    prev.textContent = desc;
}

// Muestra la ubicación ingresada por el usuario
function muestraUbicacion(ubicacion) {
    const elemento = document.getElementById('ubicacionPedida');
    elemento.textContent = ubicacion;
}

// Muestra la temperatura en grados Celsius
function muestraTemperatura(temperatura) {
    const elemento = document.getElementById('temp');
    const tempCelsius = (temperatura - 273.15).toFixed(1); // Conversión a Celsius
    elemento.textContent = tempCelsius;
}

// Muestra la humedad
function muestraHumedad(humedad) {
    const elemento = document.getElementById('humedad');
    elemento.textContent = humedad;
}


// Muestra las coordenadas de latitud y longitud en el elemento `latlong`
function muestraLatLong(lat, lon) {
    const latlong = document.getElementById('latlong');
    latlong.textContent = `${lat.toFixed(2)}, ${lon.toFixed(2)}`;
}














