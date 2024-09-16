const { DataTypes,Model  } = require('sequelize');
const sequelize = require('../db');

class TipoIngreso extends Model {}

TipoIngreso.init(
  {
    tipoIngreso_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true
    },
    tipoIngreso: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'TipoIngreso',
  },
);

module.exports = TipoIngreso