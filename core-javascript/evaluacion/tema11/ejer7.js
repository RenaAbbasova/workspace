/* 7. Modifica el ejercicio anterior o crea uno nuevo que permita cambiar el
número del artículo que se recibe. */

// Función para obtener el artículo basado en el ID proporcionado
/* async function fetchData(articleId) {
    let url = `https://jsonplaceholder.typicode.com/posts/${articleId}`; // Construir la URL usando el ID del artículo

    try {
        let response = await fetch(url);

        // Loguea el estado de la petición
        console.log('Status de la petición:', response.status);

        if (response.ok) {
            let json = await response.json();
            displayContent(json); // Llama a la función para mostrar el contenido del artículo
        } else {
            console.error('Error HTTP:', response.status);
            displayError(`Error HTTP: ${response.status}`); // Muestra mensaje de error en caso de fallo
        }
    } catch (error) {
        console.error('Error de red:', error);
        displayError('Error de red'); // Muestra mensaje de error en caso de problemas de red
    }
}

// Función para mostrar el contenido del artículo en el div
function displayContent(data) {
    const contentDiv = document.getElementById('article-content');
    contentDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`; // Formatear y mostrar el JSON
}

// Función para mostrar mensajes de error
function displayError(message) {
    const contentDiv = document.getElementById('article-content');
    contentDiv.innerHTML = `<p>Error: ${message}</p>`;
}

// Evento para manejar el botón de obtener artículo
document.getElementById('fetch-button').addEventListener('click', () => {
    const articleId = document.getElementById('article-id').value; // Obtiene el ID del input
    fetchData(articleId); // Llama a la función con el ID ingresado
});

// Llamada inicial para cargar el artículo con ID 1
fetchData(1);

module.exports = { fetchData, displayContent, displayError };  */ 



async function fetchData(articleId) {
    let url = `https://jsonplaceholder.typicode.com/posts/${articleId}`;

    try {
        let response = await fetch(url);

        // Log the status only if response is defined
        if (response) {
            console.log('Status de la petición:', response.status);
            
            if (response.ok) {
                let json = await response.json();
                displayContent(json);
            } else {
                console.error('Error HTTP:', response.status);
                displayError(`Error HTTP: ${response.status}`);
            }
        } else {
            console.error('Response is undefined');
            displayError('No se recibió respuesta del servidor');
        }
    } catch (error) {
        console.error('Error de red:', error);
        displayError('Error de red');
    }
}

// Display functions with null checks
function displayContent(data) {
    const contentDiv = document.getElementById('article-content');
    if (contentDiv) {
        contentDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } else {
        console.error('Content div not found for displaying data.');
    }
}

function displayError(message) {
    const contentDiv = document.getElementById('article-content');
    if (contentDiv) {
        contentDiv.innerHTML = `<p>Error: ${message}</p>`;
    } else {
        console.error('Content div not found for displaying error message.');
    }
}

// Set up event listeners
function setupEventListeners() {
    const button = document.getElementById('fetch-button');
    const input = document.getElementById('article-id');
    
    if (button && input) {  
        button.addEventListener('click', () => {
            const articleId = input.value; 
            fetchData(articleId); 
        });
    }
}

// Call the setup function after the DOM is ready
setupEventListeners();

// Initial call to load the article with ID 1
fetchData(1);

// Exporting functions for testing
module.exports = { fetchData, displayContent, displayError, setupEventListeners };

// Initial call to fetch data for article ID 1
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners(); // Set up event listeners once the DOM is ready
    fetchData(1); // Fetch initial data
}); 



