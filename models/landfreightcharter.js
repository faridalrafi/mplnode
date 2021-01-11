'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Landfreightcharter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Landfreightcharter.init({
    destination: DataTypes.STRING,
    origin: DataTypes.STRING,
    arival: DataTypes.STRING,
    colt: DataTypes.STRING,
    fuso: DataTypes.STRING,
    tronton12: DataTypes.STRING,
    trailer20: DataTypes.STRING,
    trailer40: DataTypes.STRING,
    lowbed: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Landfreightcharter',
  });
  return Landfreightcharter;
};