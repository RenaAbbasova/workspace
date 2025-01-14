const express = require('express');
const router = express.Router();

// Ruta para obtener todos los libros
router.get('/', (req, res) => {
    res.send('List of books');
});


// Ruta para obtener un libro por ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Details of the book with ID: ${id}`);
    
});

// Ruta para crear un nuevo libro
router.post('/', (req, res) => {
    const { title, author } = req.body;
    res.send(`New book created: ${title} por ${author}`);
});

module.exports = router;


// testing

/*curl -X GET http://localhost:3000/book

curl -X GET http://localhost:3000/book/1

curl -X POST -H "Content-Type: application/json" -d '{"title": "New Book", "author": "John Doe"}' http://localhost:3000/book

*/ 