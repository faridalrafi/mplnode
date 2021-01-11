'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seafreight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Seafreight.init({
    destination: DataTypes.STRING,
    origin: DataTypes.STRING,
    arival: DataTypes.STRING,
    origin: DataTypes.STRING,
    container20: DataTypes.STRING,
    container40: DataTypes.STRING,
    m3ton: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Seafreight',
  });
  return Seafreight;
};