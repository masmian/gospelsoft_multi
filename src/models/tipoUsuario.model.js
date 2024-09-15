const { DataTypes,Model  } = require('sequelize');
const sequelize = require('../db');

class TipoUsuario extends Model {}

TipoUsuario.init(
  {
    tipoUsuario_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true
    },
    tipoUsuario: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'TipoUsuario',
  },
);

module.exports = TipoUsuario