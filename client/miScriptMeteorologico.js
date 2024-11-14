// Attempt to obtain the user's location when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            posicion => {
                // Extract latitude and longitude from the geolocation data
                const lat = posicion.coords.latitude;
                const lon = posicion.coords.longitude;

                // Check if the coordinates are (0, 0)
                if (lat === 0 && lon === 0) {
                    alert("No se pudo determinar tu ubicación exacta. Usaremos (0, 0) como coordenadas.");
                    muestraLatLong(lat, lon); // Mostrar coordenadas (0, 0)
                    ajaxCheckWeatherLatLon(lat, lon); // Llamada a la API con (0, 0)
                } else {
                    muestraLatLong(lat, lon); // Mostrar latitud y longitud reales
                    ajaxCheckWeatherLatLon(lat, lon); // Llamada a la API con latitud y longitud reales
                }
            },
            error => {
                // Error handling if location can't be retrieved
                alert("No se pudo obtener la ubicación. Verifique los permisos o si la geolocalización está habilitada.");
            }
        );
    } else {
        // Notify the user if geolocation is not supported
        alert("La Geolocalización no está soportada por este navegador.");
    }
});

// Function to make a request to the OpenWeather API with latitude and longitude
function ajaxCheckWeatherLatLon(lat, lon) {
    const appId = "2123b15abf5dbccb4b78d19ccea8dd7d"; // Reemplaza con tu propio AppId si es necesario
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&appid=${appId}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo obtener la información del clima.");
            }
            return response.json();
        })
        .then(result => responseManager(result))
        .catch(error => alert('Error: ' + error.message));
}

/* Function that processes the API response */
function responseManager(resp) {
    console.log(resp);
    cambiaIcono(resp.weather[0].icon);
    muestraDesc(resp.weather[0].description);
    muestraUbicacion(resp.name); 
    muestraTemperatura(resp.main.temp);
    muestraHumedad(resp.main.humidity);
    muestraLatLong(resp.coord.lat, resp.coord.lon);
}
 

/* Helper functions to update HTML content */

// Change the weather icon based on the API response
function cambiaIcono(nombreIco) {
    const icono = document.getElementById('icono');
    icono.src = `https://openweathermap.org/img/wn/${nombreIco}@2x.png`;
}

// Display the weather description
function muestraDesc(desc) {
    const prev = document.getElementById('previsionTexto');
    prev.textContent = desc;
}

// Display the location name (city)
function muestraUbicacion(ubicacion) {
    const elemento = document.getElementById('ubicacionPedida');
    elemento.textContent = ubicacion;
}

// Display the temperature in Celsius
function muestraTemperatura(temperatura) {
    const elemento = document.getElementById('temp');
    const tempCelsius = (temperatura - 273.15).toFixed(1); // Conversión a Celsius
    elemento.textContent = tempCelsius;
}

// Display the humidity percentage
function muestraHumedad(humedad) {
    const elemento = document.getElementById('humedad');
    elemento.textContent = humedad;
}

// Display the latitude and longitude in the `latlong` element
function muestraLatLong(lat, lon) {
    const latlong = document.getElementById('latlong');
    latlong.textContent = `${lat.toFixed(2)}, ${lon.toFixed(2)}`;
}
