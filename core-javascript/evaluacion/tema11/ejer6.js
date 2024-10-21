/* 6. Pide información con fetch a la url: https://jsonplaceholder.typicode.com/posts/1. Loguea el status de la petición e imprime por pantalla el contenido del 
artículo que has recibido. */


let url = 'https://jsonplaceholder.typicode.com/posts/1';

// Creamos una función asíncrona para manejar el fetch
async function fetchData() {
    try {
        
        let response = await fetch(url);

     
        if (response.ok) {
           
            let json = await response.json();
            document.getElementById('Contenido del artículo:', json); 
        } else {
            
            document.getElementById('Error-HTTP:', response.status);
        }
    } catch (error) {
        document.getElementById('Error de red:', error); 
    }
}

function displayContent(data) {
    const contentDiv = document.getElementById('article-content');
    contentDiv.innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
    `;
}

fetchData();
