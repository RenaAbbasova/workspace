const express = require('express');
const { users, teachers, students } = require('./models');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;
const mustacheExpress = require("mustache-express");
const session = require("express-session"); // Para manejar sesiones
const isAdmin = require('./middleware/isAdmin'); // isAdmin middleware
const isAuthenticated = require('./middleware/isAuthenticated');

const jwt = require('jsonwebtoken');

app.use(express.json());


// Welcome route
app.get('/api', (req, res) => {
  res.send('¡Bienvenido al proyecto final!');
});

// ----------- CRUD for Users -------------

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const allUsers = await users.findAll();
    res.json(allUsers);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get user by id
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await users.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Create a new user
app.post('/api/users', async (req, res) => {
  try {
    const { email, password, type, active } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = await users.create({ email, password: hashedPassword, type, active });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update a user by id
app.put('/api/users/:id', async (req, res) => {
  try {
    const user = await users.findByPk(req.params.id);
    if (user) {
      const { email, password, type, active } = req.body;
      const hashedPassword = password ? await bcrypt.hash(password, 10) : user.password; // Update password if provided
      await user.update({ email, password: hashedPassword, type, active });
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Delete a user by id (with restriction)
app.delete('/api/users/:id', async (req, res) => {
  try {
    const user = await users.findByPk(req.params.id);

    if (user) {
      // Check if the user has an associated teacher
      const associatedTeacher = await teachers.findOne({ where: { user_id: user.id } });

      if (associatedTeacher) {
        return res.status(400).send('Cannot delete user because it has an associated teacher');
      }

      await user.destroy();
      res.send('User deleted');
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// ----------- CRUD for Teachers -------------

// Get all teachers
app.get('/api/teachers', async (req, res) => {
  try {
    const allTeachers = await teachers.findAll();
    res.json(allTeachers);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get teacher by id
app.get('/api/teachers/:id', async (req, res) => {
  try {
    const teacher = await teachers.findByPk(req.params.id);
    if (teacher) {
      res.json(teacher);
    } else {
      res.status(404).send('Teacher not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Create a new teacher
app.post('/api/teachers', async (req, res) => {
  try {
    const { dni, name, last_name, date_of_birth, user_id } = req.body;
    const newTeacher = await teachers.create({ dni, name, last_name, date_of_birth, user_id });
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update a teacher by id
app.put('/api/teachers/:id', async (req, res) => {
  try {
    const teacher = await teachers.findByPk(req.params.id);
    if (teacher) {
      const { dni, name, last_name, date_of_birth, user_id } = req.body;
      await teacher.update({ dni, name, last_name, date_of_birth, user_id });
      res.json(teacher);
    } else {
      res.status(404).send('Teacher not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Delete a teacher by id (with restriction)
app.delete('/api/teachers/:id', async (req, res) => {
  try {
    const teacher = await teachers.findByPk(req.params.id);

    if (teacher) {
      // Check if the teacher has associated students
      const associatedStudents = await students.findOne({ where: { teacher_id: teacher.id } });

      if (associatedStudents) {
        return res.status(400).send('Cannot delete teacher because they have associated students');
      }

      await teacher.destroy();
      res.send('Teacher deleted');
    } else {
      res.status(404).send('Teacher not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// ----------- CRUD for Students -------------

// Get all students
app.get('/api/students', async (req, res) => {
  try {
    const allStudents = await students.findAll();
    res.json(allStudents);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get student by id
app.get('/api/students/:id', async (req, res) => {
  try {
    const student = await students.findByPk(req.params.id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).send('Student not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Create a new student
app.post('/api/students', async (req, res) => {
  try {
    const { dni, name, last_name, date_of_birth, teacher_id } = req.body;
    const newStudent = await students.create({ dni, name, last_name, date_of_birth, teacher_id });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update a student by id
app.put('/api/students/:id', async (req, res) => {
  try {
    const student = await students.findByPk(req.params.id);
    if (student) {
      const { dni, name, last_name, date_of_birth, teacher_id } = req.body;
      await student.update({ dni, name, last_name, date_of_birth, teacher_id });
      res.json(student);
    } else {
      res.status(404).send('Student not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Delete a student by id
app.delete('/api/students/:id', async (req, res) => {
  try {
    const student = await students.findByPk(req.params.id);
    if (student) {
      await student.destroy();
      res.send('Student deleted');
    } else {
      res.status(404).send('Student not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});


// GET /api/teachers/:teacher_id/students
app.get('/api/teachers/:teacher_id/students', async (req, res) => {
  try {
    const { teacher_id } = req.params;

    // Check if teacher exists
    const teacher = await teachers.findByPk(teacher_id);
    if (!teacher) {
      return res.status(404).send('Teacher not found');
    }

    // Check if the associated user is active
    const user = await users.findByPk(teacher.user_id);
    if (!user || !user.active) {
      return res.status(401).send('Teacher\'s user is not active');
    }

    // Fetch students associated with the teacher, ordered by date of birth
    const teacherStudents = await students.findAll({
      where: { teacher_id: teacher.id },
      order: [['date_of_birth', 'ASC']],  // Sorting by date_of_birth
    });

    // Return the list of students as JSON
    res.json(teacherStudents);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


// Endpoint to update the 'active' field of a user (POST /api/users/:id/active)
app.post('/api/users/:id/active', (req, res) => {
  users.findByPk(req.params.id).then((user) => {
    if (!user) {
      return res.status(404).send('User not found');
    }

    if (user.active) {
      return res.status(400).send('User is already active');
    }
    
    user.update({ active: true })
      .then(updatedUser => {
        res.json(updatedUser); 
      })
      .catch(err => {
        res.status(500).send(err.message);
      });
  });
});


// Endpoint to get the 'active' field of a user (GET /api/users/:id/active)
app.get('/api/users/:id/active', (req, res) => {
  users.findByPk(req.params.id).then((user) => {
    if (!user) {
      return res.status(404).send('User not found');
    }
    
    // Return only the 'active' field of the user
    res.json({ active: user.active });
  }).catch(err => {
    res.status(500).send(err.message); // Handle any errors
  });
});

// Ejercicio 7 --------------

//  Mustache egine of the views
app.engine("html", mustacheExpress()); // Uso .html como extensión de las vistas
app.set("view engine", "html"); // Motor de vistas será Mustache
app.set("views", __dirname + "/views"); // Carpeta donde están las vistas

// Serve static files (CSS, images, etc.)
app.use(express.static(__dirname + "/public"));

// Body parser middleware
app.use(express.urlencoded({ extended: true }));

// Endpoint GET /login
app.get("/login", (req, res) => {
  // Renderizo el archivo views/login.html
  res.render("login", { message: "¡Bienvenido al login!" });
});

// Ejercicio 8 -----------------
// Configurar middleware de sesiones
app.use(session({
  secret: 'ClaveSegura', // Cambia esto por una clave segura
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

// Endpoint POST /login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Buscar el usuario en la tabla "users" por email
    const user = await users.findOne({ where: { email: username } });

     // Si no existe el usuario, renderizar página de error
    if (!user) {
      return res.status(401).render("error-login", { message: "Usuario no encontrado" });
    }

    // Comparar la contraseña con la encriptación almacenada en la base de datos
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      // Si la contraseña no coincide, renderizar página de error
      return res.status(401).render("error-login", { message: "Contraseña incorrecta" });
    }

    // Si la contraseña es válida, setear las variables de sesión
    req.session.loggedIn = true;// El usuario está logueado
    req.session.user = {
      id: user.id,
      email: user.email,
      type: user.type,
      active: user.active,
      cookie: { secure: false }
    };

    // Redirigir a la página "home"
    res.redirect('/home');
  } catch (error) {
    // Manejar errores
    console.error('Error en POST /login:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Ejercicio 9

// Endpoint GET /users - list all the users (only by admin)
app.get('/users', isAdmin, async (req, res) => {
  try {
    // Obtener todos los usuarios (excluyendo contraseñas)
    const userList = await users.findAll({
      attributes: { exclude: ['password'] },
      raw: true // This should return plain objects instead of Sequelize instances
    });

    // Log the fetched data for debugging
    console.log('Fetched Users:', userList);

    if (!userList || userList.length === 0) {
      console.error('No users found.');
      return res.status(404).send('No hay usuarios para mostrar.');
    }

    // Renderizar la vista 'users.html' con los usuarios
    res.render('users', { users: userList });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
});

// ejercicio 10 -valido
// Endpoint GET /home
/* app.get('/home', isAuthenticated, async (req, res) => {
  try {
    console.log('User session:', req.session.user); // Log user data

    if (req.session.user.type === 'admin') {
      console.log('Admin user detected, redirecting to /users');
      return res.redirect('/users');
    }

    const teacher = await teachers.findOne({
      where: { user_id: req.session.user.id }
    });

    if (!teacher) {
      console.log('No teacher found for user:', req.session.user.id);
      return res.status(404).send('No se encontró información del profesor asociado.');
    }

    console.log('Teacher found:', teacher); // Log teacher data

    res.render('home', { user: req.session.user, teacher }); // Renderizar vista home.html
  } catch (error) {
    console.error('Error in GET /home:', error);
    res.status(500).send('Error en el servidor');
  }
}); */


// Endpoint GET /home
app.get('/home', isAuthenticated, async (req, res) => {
  try {
    console.log('User session:', req.session.user); // Log user data

    if (req.session.user.type === 'admin') {
      console.log('Admin user detected, redirecting to /users');
      return res.redirect('/users');
    }

    // Fetch teacher associated with the current logged-in user
    const teacher = await teachers.findOne({
      where: { user_id: req.session.user.id }
    });

    if (!teacher) {
      console.log('No teacher found for user:', req.session.user.id);
      return res.status(404).send('No se encontró información del profesor asociado.');
    }

    console.log('Teacher found:', teacher); // Log teacher data

    // Fetch all students associated with the teacher
    const studentsList = await students.findAll({
      where: { teacher_id: teacher.id },
      order: [['date_of_birth', 'ASC']]  // Sorting students by their date of birth
    });

    // Render the home view and pass teacher and students data
    res.render('home', { 
      user: req.session.user, 
      teacher: teacher,
      students: studentsList // Pass the students list to the view
    });

  } catch (error) {
    console.error('Error in GET /home:', error);
    res.status(500).send('Error en el servidor');
  }
});



// Ejercicio 11
// Endpoint POST /logout para eliminar sesión
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('No se pudo cerrar sesión');
    }
    res.redirect('/login');
  });
});

// Ejercicio 12

const JWT_SECRET = "ClaveMegaSecreta";

// POST to generate JWT token
app.post("/api/token", async (req, res) => {
  try {
    // Find the user by email (username)
    const user = await users.findOne({ where: { email: req.body.username } });
    
    if (user) {
      // Validate the provided password
      const isValidPassword = await bcrypt.compare(req.body.password, user.password);
      if (isValidPassword) {
        // Generate JWT token with 15-minute expiration
        const token = jwt.sign({ username: user.email }, JWT_SECRET, { expiresIn: "15m" });
        return res.json({ token }); // Return the token as JSON
      } else {
        return res.status(401).json({ message: "Invalid username or password" }); // Invalid password
      }
    } else {
      return res.status(401).json({ message: "Invalid username or password" }); // User not found
    }
  } catch (error) {
    return res.status(500).json({ message: error.message }); // Internal error
  }
});

// Middleware to verify token and extract data
const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({ message: "Authorization Header missing" });
  }

  const token = authorization.split(" ")[1]; // Get token from Authorization header

  try {
    const jwtData = jwt.verify(token, JWT_SECRET); // Verify the token
    req.data = jwtData;  // Attach decoded token data to the request object
    next();  // Continue to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token." }); // Token verification failed
  }
};

// Protected route: GET /jwt (requires valid token)
app.get("/jwt", isAuth, (req, res) => {
  res.json({ message: "You are authenticated!", data: req.data });  // Return token data
});

app.get("/auth/users", isAuth, async (req, res) => {
  try {
    const user = await users.findOne({ where: { email: req.data.username } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "Authorized",
      user: {
        id: user.id,
        email: user.email,
        type: user.type,
        active: user.active
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}); 




// Server listening
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


