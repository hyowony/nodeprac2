'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      //UserId => userId CamelCase Convert 
      this.belongsTo(User, { foreignKey: 'userId', as:'user'})
      //관계 설정하는 것 유심히 보기
    }
  }
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false

    },
    content: {
      type: DataTypes.STRING,
      allowNull: false

    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    
  }, {
    sequelize,
    tableName: "posts",
    modelName: 'Post',
  });
  return Post;
};