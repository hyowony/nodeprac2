'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Post}) {
      // define association here
      this.hasMany(Post, {foreignKey:'userId', as:'posts'})
    }
  }
  User.init({
    nickname: DataTypes.STRING,
    password: DataTypes.STRING,
    confirm: DataTypes.STRING
  }, {
    sequelize, 
    tableName: "users",
    modelName: 'User',
  });
  return User;
};