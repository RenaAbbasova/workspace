const express = require("express" );
const { check, validationResult } = require("express-validator"); // Importa los validadores
const students = require("./repositories/students.js" );
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint para obtener todos los estudiantes
app.get("/students", (req, res) => {
    students.getAll()
      .then((results) => res.json(results))
      .catch((err) => res.status(500).json({ message: err.message }));
  });

// Endpoint para obtener un estudiante por ID
app.get("/students/:id", (req, res) => {
    const studentId = parseInt(req.params.id, 10); // Convertir el parámetro 'id' a número entero
    console.log("Buscando estudiante con ID:", studentId);
  
    students.getById(studentId)
      .then((student) => {
        if (student) {
          res.json(student); // Devolver los datos del estudiante si existe
        } else {
          res.status(404).json({ message: "Student doesn't exist" }); // Respuesta 404 si no existe
        }
      })
      .catch((err) => {
        res.status(500).json({ message: err.message }); // Respuesta 500 si hay un error interno
      });
  });
  


// Endpoint para insertar un nuevo estudiante
app.post(
  "/students",
  [
    // Validar campos
    check("email").isEmail().withMessage("Invalid email format"),
    check("date_of_birth").isDate().withMessage("Date of birth must be a valid date"),
    check("name").not().isEmpty().withMessage("Name is required"),
    check("last_name").not().isEmpty().withMessage("Last name is required"),
    check("active").isBoolean().withMessage("Active must be a boolean value"),
  ],
  async (req, res) => {
    // Comprobar si hubo errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Comprobar si el email ya existe en la base de datos
    try {
      const existingStudent = await students.getByEmail(req.body.email);
      if (existingStudent) {
        return res.status(422).json({ message: "A user already exists with this email" });
      }

      // Si no existe, insertar el nuevo estudiante
      students
        .insert(req.body)
        .then((result) => {
          res.json({ success: true, message: "Student was saved successfully" });
        })
        .catch((err) => {
          console.error("Error inserting student:", err);
          res.status(500).json({ success: false, message: err.message || "An error occurred" });
        });
    } catch (err) {
      console.error("Error checking if email exists:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);





// Iniciar el servidor
app.listen(port, () => {
 console. log(`Example server listening on http://localhost: ${port}`);
});