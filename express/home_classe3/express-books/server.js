const express = require('express');
const bodyParser = require('body-parser');
const booksRoutes = require('./routes/books'); // Importar las rutas
const app = express(); //crear la aplicacion
const PORT = 3000;

// Middleware para analizar JSON // Sin este middleware, req.body estará indefinido en solicitudes como POST o PUT.
app.use(bodyParser.json());//Middleware que permite analizar los cuerpos de las solicitudes entrantes 

// Usar las rutas de libros bajo el prefijo /books
app.use('/books', booksRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
