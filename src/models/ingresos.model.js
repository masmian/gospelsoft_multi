const { DataTypes,Model  } = require('sequelize');
const Usuario = require('./usuario.model')
const Culto = require('./culto.model')
const TipoIngreso = require('./tipoIngreso.model')
const Moneda = require('./moneda.model')

const sequelize = require('../db');

class Ingreso extends Model {}

Ingreso.init(
  {
    ingreso_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true
    },
    fecha_ingreso: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    tipo_ingreso: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    moneda: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_culto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    usuario_registra: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    usuario_modifica : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Ingreso',
  },
);

Usuario.hasMany(Ingreso, {foreignKey:'usuario_registra'})
Culto.hasMany(Ingreso, {foreignKey:'id_culto'})
Moneda.hasMany(Ingreso, {foreignKey:'moneda'})
TipoIngreso.hasMany(Ingreso, {foreignKey:'tipo_ingreso'})

module.exports = Ingreso