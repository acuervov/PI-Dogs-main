const { response } = require('express');
const { DataTypes } = require('sequelize');

module.exports = function temp (sequelize){
  // defino el modelo
  sequelize.define('temperamento', {
    temperamento: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  
};