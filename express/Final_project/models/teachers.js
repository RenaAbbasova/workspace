'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teachers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users, { foreignKey: 'user_id', as: 'user' });
      this.hasMany(models.students, { foreignKey: 'teacher_id', as: 'students' });
    }
  }
  teachers.init({
    dni: DataTypes.STRING,
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'teachers',
  });
  return teachers;
};