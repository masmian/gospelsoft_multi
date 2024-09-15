const { DataTypes,Model  } = require('sequelize');
const Usuario = require('./usuario.model')

const sequelize = require('../db');

class Miembro extends Model {}

Miembro.init(
  {
    miembro_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
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
    cedula: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    estado_civil: {
      type: DataTypes.BOOLEAN, // 1 Casado 0 Soltero
      allowNull: false
    },
    sexo: {
      type: DataTypes.BOOLEAN, // 1 Masculino 0 Femenino
      allowNull: false
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fecha_bautismo: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    telefono: {
      type: DataTypes.TEXT, // 1 Masculino 0 Femenino
      allowNull: true
    },
    estado: {
        type: DataTypes.BOOLEAN, // 1 Activo 0 Expulsado
        defaultValue: 1
    },
    usuario_registra: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    usuario_edita: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
  },
  {
    sequelize,
    modelName: 'Miembro',
  },
);

Usuario.hasMany(Miembro, {foreignKey:'usuario_registra'})

module.exports = Miembro