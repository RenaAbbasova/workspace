// repositories/students.js
const db = require("./db");

module.exports = {
  getAll() {
    return db("students");
  },
  
  getById(id) {
    return db("students").where({ id }).first();
  },

  insert(data) {
    return db("students").insert(data);
  },
};
