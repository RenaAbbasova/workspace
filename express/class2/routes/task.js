// routes/task.js
const express = require("express");
let router = express.Router();
// La función se ejecuta cada vez que la aplicación recibe una solicitud.
router.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});
// La función se ejecuta para cualquier tipo de solicitud HTTP en ruta /:id.
router.use("/:id", (req, res, next) => {
  console.log("Request Type:", req.method);
  next();
});
// La función maneja las solicitudes GET a la ruta /:id.
router.get("/:id", (req, res, next) => {
  res.send("ID: " + req.params.id);
});

module.exports = router;

/*importamos el modulo express, creamos una instancia de router atravez de un builtin middleware express.router(). 
executa cada vez que resibe una solicitud y imprime el tiempo de la solicitud. esta function middlewate executa cada ves que reciba cualquier 
solicitud http en una ruta que coincide con el patron id. */
