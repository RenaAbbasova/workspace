/* 8. Modifica el ejercicio anterior y recibe la lista de todos los artículos.
¿Cuántos hay? ¿Podrías listar los títulos? ¿Y hacer una tabla con los
títulos y los contenidos? */

// Función para obtener la lista de todos los artículos
async function fetchAllArticles() {
    let url = 'https://jsonplaceholder.typicode.com/posts'; // URL para obtener todos los artículos

    try {
        let response = await fetch(url);

        // Loguea el estado de la petición
        console.log('Status de la petición:', response.status);

        if (response.ok) {
            let articles = await response.json();
            displayArticleInfo(articles); // Llama a la función para mostrar la información
        } else {
            console.error('Error HTTP:', response.status);
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
}

// Función para mostrar la cantidad de artículos, títulos y tabla de contenido
function displayArticleInfo(articles) {
    // Mostrar la cantidad de artículos
    document.getElementById('article-count').textContent = `Total de artículos: ${articles.length}`;

    // Mostrar la lista de títulos
    const titlesList = document.getElementById('article-titles');
    titlesList.innerHTML = ''; // Limpiar contenido anterior
    articles.forEach(article => {
        const listItem = document.createElement('li');
        listItem.textContent = article.title;
        titlesList.appendChild(listItem);
    });

    // Crear una tabla con títulos y contenidos
    const tableBody = document.querySelector('#article-table tbody');
    tableBody.innerHTML = ''; // Limpiar contenido anterior
    articles.forEach(article => {
        const row = document.createElement('tr');
        const titleCell = document.createElement('td');
        const contentCell = document.createElement('td');

        titleCell.textContent = article.title;
        contentCell.textContent = article.body;

        row.appendChild(titleCell);
        row.appendChild(contentCell);
        tableBody.appendChild(row);
    });
}

// Evento para manejar el botón de obtener todos los artículos
document.getElementById('fetch-button').addEventListener('click', fetchAllArticles);


