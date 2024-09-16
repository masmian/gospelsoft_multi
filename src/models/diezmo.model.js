const { DataTypes,Model  } = require('sequelize');
const Usuario = require('./usuario.model')
const Culto = require('./culto.model')
const Diezmador = require('./diezmador.model')
const Moneda = require('./moneda.model')

const sequelize = require('../db');

class Diezmo extends Model {}

Diezmo.init(
  {
    diezmo_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true
    },
    diezmador: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    culto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    moneda: {
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
    modelName: 'Diezmo',
  },
);

Usuario.hasMany(Diezmo, {foreignKey:'usuario_id'})
Culto.hasMany(Diezmo, {foreignKey:'culto'})
Diezmador.hasMany(Diezmo, {foreignKey:'diezmador'})
Moneda.hasMany(Diezmo, {foreignKey:'moneda'})

module.exports = Diezmo