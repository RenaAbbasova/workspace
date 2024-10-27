/* /* 6. Pide información con fetch a la url: https://jsonplaceholder.typicode.com/posts/1. Loguea el status de la petición e imprime por pantalla el contenido del 
artículo que has recibido. */


let url = 'https://jsonplaceholder.typicode.com/posts/1';


// Creamos una función asíncrona para manejar el fetch
async function fetchData() {
    try {
        let response = await fetch(url);

        // Loguea el estado de la petición
        console.log('Status de la petición:', response.status);

        if (response.ok) {
            let json = await response.json();
            displayContent(json); // Llamar a la función para mostrar el contenido
        } else {
            console.error('Error HTTP:', response.status);
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
}

// Función para mostrar el contenido en el div
function displayContent(data) {
    const contentDiv = document.getElementById('article-content');
    if (contentDiv) {
        contentDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } else {
        console.error('Content div not found');
    }
}


// Llama a la función para obtener el artículo
fetchData(); 

module.exports = { fetchData };





