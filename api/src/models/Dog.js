const { response } = require('express'); // para que sirve esto?
const { DataTypes, UUID } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = function dog (sequelize) {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: UUID,
      primaryKey: true, 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    altura: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    peso: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    añosvida: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  
};