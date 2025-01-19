// repositories/students.js

const db = require("../models"); // Importa los modelos definidos en models/index.js

module.exports = {
  // Obtener todos los estudiantes
  async getAll() {
    try {
      return await db.students.findAll({});
    } catch (error) {
      console.error("Error al obtener estudiantes:", error);
      throw error; // Propagar el error para manejarlo en app.js
    }
  },
  
  // Obtener un estudiante por su ID
  async getById(id) {
    try {
      // Buscar al estudiante por el ID
      const student = await db.students.findOne({
        where: { id: id },
      });

      return student; // Retorna el estudiante si lo encuentra (o null si no existe)
    } catch (error) {
      console.error("Error al obtener el estudiante por ID:", error);
      throw error; // Propagar el error para manejarlo en app.js
    }
  },

    // Obtener un estudiante por su email
  async getByEmail(email) {
    try {
        // Buscar al estudiante por el email
      const student = await db.students.findOne({
        where: { email: email },
      });
  
      return student; // Retorna el estudiante si lo encuentra (o null si no existe)
    } catch (error) {
      console.error("Error al obtener el estudiante por email:", error);
      throw error; // Propagar el error para manejarlo en app.js
    }
  },

  
  // Insertar un nuevo estudiante
  async insert(data) {
    try {
      return await db.students.create(data);
    } catch (error) {
      console.error("Error al crear estudiante:", error);
      throw error; // Propagar el error para manejarlo en app.js
    }
  },
};
