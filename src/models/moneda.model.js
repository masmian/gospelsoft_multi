const { DataTypes,Model  } = require('sequelize');
const sequelize = require('../db');

class Moneda extends Model {}

Moneda.init(
  {
    moneda_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true
    },
    moneda: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Moneda',
  },
);

module.exports = Moneda