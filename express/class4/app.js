const express = require("express");
const { body, validationResult } = require("express-validator");
const students = require("./repositories/students.js");
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint GET /students
app.get("/students", (req, res) => {
  students.getAll().then((results) => res.json(results));
});

// Endpoint GET /students/:id (Obtener un estudiante por ID)
app.get("/students/:id", (req, res) => {
  const { id } = req.params;
  students.getById(id).then((student) => {
    if (!student) {
      return res.status(404).json({ message: "Student doesn't exist" });
    }
    res.json(student);
  });
});

// Endpoint POST /students (Crear un nuevo estudiante)
app.post(
  "/students",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("last_name").notEmpty().withMessage("Last name is required"),
    body("date_of_birth").isDate().withMessage("Date of birth must be a valid date"),
    body("email").isEmail().withMessage("Invalid email format"),
  ],
  (req, res) => {
    // Validate inputs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Proceed to insert into DB
    students
      .insert(req.body)
      .then((result) => {
        res.json({ success: true, message: "Student was saved successfully" });
      })
      .catch((err) => {
        res.json({ success: false, message: err.message });
      });
  }
);

app.listen(port, () => {
  console.log(`Example server listening on http://localhost:${port}`);
});
