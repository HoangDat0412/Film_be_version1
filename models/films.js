'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Films extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Actor,Comments,FilmType}) {
      // define association here
      // this.hasMany(Comments);
      // this.hasMany(Actor);
      // this.hasMany(FilmType);
    }
  }
  Films.init({
    name: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: true, 
      },
    },
    hot: {
      type:DataTypes.BOOLEAN,
    },
    des: {
      type:DataTypes.TEXT,
      validate: {
        notEmpty: true, 
      },
    },
    yRelease: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: true, 
      },
    },
    director: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: true, 
      },
    },
    src: {
      type:DataTypes.STRING,
    },
    srcurl: {
      type:DataTypes.STRING,
    },
    status: {
      type:DataTypes.BOOLEAN,
    },
    img: {
      type:DataTypes.STRING,
    },
    imgurl: {
      type:DataTypes.STRING,
    },
    trailer: {
      type:DataTypes.STRING,
    },
    trailerurl: {
      type:DataTypes.STRING,
    },
    views: {
      type:DataTypes.INTEGER,
      defaultValue:0
    },
    country: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: true, 
      }
    },
    time: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: true, 
      }
    },
    src2:{
      type:DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Films',
  });
  return Films;
};