const { DataTypes,Model  } = require('sequelize');
const sequelize = require('../db');

class TipoEgreso extends Model {}

TipoEgreso.init(
  {
    tipoEgreso_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true
    },
    tipoEgreso: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue : 1
    },
  },
  {
    sequelize,
    modelName: 'TipoEgreso',
  },
);

module.exports = TipoEgreso