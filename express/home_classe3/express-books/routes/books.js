// importar express
const express = require('express');
//crear objeto de router
const router = express.Router();

// Ruta para obtener todos los libros
router.get('/', (req, res) => {
    res.send('List of books');
});

// Ruta para obtener un libro por ID
router.get('/:id', (req, res) => {
    const id = req.params.id;

    // Obtener las propiedades de req adicionales
    const hostname = req.hostname;
    const ip = req.ip; //La dirección IP del cliente que realizó la solicitud.
    const params = req.params;
    const route = req.route;//Información sobre la ruta que procesó esta solicitud.

    // Enviar la respuesta con las propiedades
    res.json({
        hostname: hostname,
        ip: ip,
        params: params,
        route: route
    });
});

// Ruta para crear un nuevo libro
router.post('/', (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).send('Both title and author are required');
    }
    res.send(`New book created: ${title} by ${author}`);
});

module.exports = router;


/* curl -X POST http://localhost:3000/books \
-H "Content-Type: application/json" \
-d '{"title": "The Great Gatsby", "author": "F. Scott Fitzgerald"}'
*/ 