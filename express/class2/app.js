// app.js

const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

// Middlewares globales
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// Middleware general para registrar tiempo
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

// Middleware para imprimir información de la solicitud
app.use("/user/:id", (req, res, next) => {
  console.log("Request Type:", req.method);
  next();
});

app.use(
  "/user/:id",
  (req, res, next) => {
    console.log("Request URL:", req.originalUrl);
    next();
  },
  (req, res, next) => {
    console.log("Request Type composed:", req.method);
    next();
  }
);
// Define una ruta para manejar solicitudes HTTP de tipo POST
// Ejercicio 1: Ruta POST para manejar JSON, texto y URL-encoded
app.post("/test", (req, res) => {
  const title = req.body.title || "Sin título";
  res.send(`El título recibido es: ${title}`);
});

// Ejercicio 2: Validación de ID en la ruta /student/:id
app.get(
  "/student/:id",
  (req, res, next) => {
    const studentId = Number(req.params.id);
    if (isNaN(studentId)) return next(new Error("Student ID inválido"));
    if (studentId > 99) return next(new Error("Student ID no puede ser mayor de 99"));
    next();
  },
  (req, res) => {
    res.send(`Estudiante con ID: ${req.params.id}`);
  }
);

// Ejercicio 3: Uso del router de libros
const bookRouter = require("./routes/book");
app.use("/book", bookRouter);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error en el servidor: " + err.message);
});

// Middlewares para cookies
app.use(cookieParser());

// Ruta para asignar una cookie
app.get("/cookie", (req, res) => {
  res.cookie("custom-cookie", "cookie value").send("Cookie is set");
});

// Obtengo los valores de las cookies
app.get("/check-cookie", (req, res) => {
  console.log("Cookies: ", req.cookies);
  res.end(req.cookies["custom-cookie"]);
});

// Servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

//testing

/*Test with JSON : curl -X POST -H "Content-Type: application/json" -d '{"title":"Mi título JSON"}' http://localhost:3000/test
 Test with URL-encoded form data: curl -X POST -d "title=Mi título en formulario" http://localhost:3000/test
Testing with Text: curl -X POST -H "Content-Type: text/plain" -d "title=Mi título en texto" http://localhost:3000/test
*/ 