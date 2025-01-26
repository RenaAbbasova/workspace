'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Un estudiante pertenece a un profesor
      this.belongsTo(models.teachers, { foreignKey: 'teacher_id', as: 'teacher' });
    }
  }
  students.init({
    dni: DataTypes.STRING,
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    teacher_id: {
      type: DataTypes.INTEGER,   // Definición correcta del tipo de dato
      allowNull: false,          // Asegura que no puede ser nulo
      references: {
        model: 'teachers',       // Relación con la tabla `teachers`
        key: 'id',               // Relación con el campo `id` de `teachers`
      },
    },
  }, {
    sequelize,
    modelName: 'students',
  });
  return students;
};
