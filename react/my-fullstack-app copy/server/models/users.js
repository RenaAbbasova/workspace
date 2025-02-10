// users.js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.teachers, { foreignKey: 'user_id', as: 'teacher' })
    }
  }
  users.init({
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    type: DataTypes.STRING,
    active: { type: DataTypes.BOOLEAN, defaultValue: true }, 
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};