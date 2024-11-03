/* /* 6. Pide información con fetch a la url: https://jsonplaceholder.typicode.com/posts/1. Loguea el status de la petición e imprime por pantalla el contenido del 
artículo que has recibido. */
//let url = 'https://jsonplaceholder.typicode.com/posts/1';


async function fetchData(displayContent = displayContentOriginal) {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        console.log('Status de la petición:', response.status);

        if (response.ok) {
            let json = await response.json();
            displayContent(json); // Call displayContent with JSON data
        } else {
            console.error('Error HTTP:', response.status);
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
}

function displayContentOriginal(data) {
    const contentDiv = document.getElementById('article-content');
    if (contentDiv) {
        contentDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } else {
        console.error('Content div not found');
    }
}

// Conditionally call fetchData if not in a test environment
if (typeof process === 'undefined' || process.env.NODE_ENV !== 'test') {
    fetchData();
}

module.exports = { fetchData, displayContent: displayContentOriginal };






