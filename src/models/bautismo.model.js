const { DataTypes,Model  } = require('sequelize');
const Usuario = require('./usuario.model')

const sequelize = require('../db');

class Bautismo extends Model {}

Bautismo.init(
  {
    bautismo_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cedula: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fecha_conversion: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fecha_bautismo: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    sexo: {
        type: DataTypes.BOOLEAN, // 1 Masculino 0 Femenino
        allowNull: false
      },
      oficia: {
          type: DataTypes.TEXT, // 1 Masculino 0 Femenino
          allowNull: false
        },
    usuario_registra: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Bautismo',
  },
);

Usuario.hasMany(Bautismo, {foreignKey:'usuario_id'})

module.exports = Bautismo