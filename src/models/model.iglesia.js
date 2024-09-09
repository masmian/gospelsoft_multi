const { DataTypes,Model  } = require('sequelize');
const sequelize = require('../db');

class Iglesia extends Model {}

Iglesia.init(
  {
    iglesia_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey:true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pastor: {
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
    modelName: 'Iglesia',
  },
);

module.exports = Iglesia