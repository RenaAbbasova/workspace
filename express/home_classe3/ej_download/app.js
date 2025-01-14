const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


// ruta para descargar el archivo
app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'prueba.pdf');
    res.download(filePath, 'texto.pdf', err => {
        if(err) {
            console.log('somthing wrong:', err);
            res.status(500).send('somthing went wrong');
        }
    })
});


// Ruta para enviar información en formato JSON
app.get('/user', (req, res) => {
    const informe = {
        name: 'Maria',
        surname: 'Garcia',
    };
    res.json(informe);
})

// Ruta para redirigir
app.get('/google', (req, res) => {
    res.redirect('https://www.google.com');
})

// Ruta para renderizar
app.get('/welcome', (req, res) => {
    res.render('index', {
        title: 'New Movie 2025',
        movie: 'Sonic'
    });
});

// ruta codego de estado 
app.get('/status', (req, res) => {
    const code = req.query.code;

    if(code) {
        res.sendStatus(parseInt(code));
    }else{
        res.sendStatus(400);
    }
});

// Servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });