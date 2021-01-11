'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Landfreightkg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Landfreightkg.init({
    destination: DataTypes.STRING,
    origin: DataTypes.STRING,
    price: DataTypes.INTEGER,
    arival: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Landfreightkg',
  });
  return Landfreightkg;
};