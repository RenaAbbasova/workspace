/* 7. Modifica el ejercicio anterior o crea uno nuevo que permita cambiar el
número del artículo que se recibe. */
async function fetchData(articleId) {
    const contentDiv = document.getElementById('article-content');
    if (!contentDiv) {
        console.error('Content div not found for displaying data.'); // Ensure this line exists
        return;
    }
    let url = `https://jsonplaceholder.typicode.com/posts/${articleId}`;

    try {
        let response = await fetch(url);
        console.log('Status de la petición:', response.status);

        if (response.ok) {
            let json = await response.json();
            displayContent(json);
        } else {
            console.error('Error HTTP:', response.status);
            displayError(`Error HTTP: ${response.status}`);
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
        button.removeEventListener('click', handleFetch); // Prevent duplicate listeners
        button.addEventListener('click', handleFetch);
    }
}

// Handle the fetching of data
function handleFetch() {
    const input = document.getElementById('article-id');
    const articleId = input.value; 
    fetchData(articleId); 
}

// Call the setup function after the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners(); // Set up event listeners once the DOM is ready
    fetchData(1); // Fetch initial data
});

// Exporting functions for testing
module.exports = { fetchData, displayContent, displayError, setupEventListeners };   
 



