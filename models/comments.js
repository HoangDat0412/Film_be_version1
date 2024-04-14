'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users,Films}) {
      // define association here
      // this.hasOne(Users,{
      //   foreignKey: {
      //     name: 'userId'
      //   }
      // })
      // this.hasOne(Films,{
      //   foreignKey: {
      //     name: 'filmId'
      //   }
      // })
    }
  }
  Comments.init({
    filmId: {
      type:DataTypes.INTEGER,
      validate: {
        notEmpty: true, 
      },
    },
    userId: {
      type:DataTypes.INTEGER,
      validate: {
        notEmpty: true, 
      },
    },
    comment: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: true, 
      },
    }
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};