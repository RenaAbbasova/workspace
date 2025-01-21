const express = require('express');
const { users, teachers, students } = require('./models');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

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

// Server listening
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


