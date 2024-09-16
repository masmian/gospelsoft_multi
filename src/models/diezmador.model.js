const { DataTypes,Model  } = require('sequelize');
const Iglesia = require('./iglesia.model')

const sequelize = require('../db');

class Diezmador extends Model {}

Diezmador.init(
  {
    diezmador_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true
    },
    id_iglesia: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    usuario_registra: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    usuario_edita: {
      type: DataTypes.INTEGER,
      allowNull:true
    }
  },
  {
    sequelize,
    modelName: 'Diezmador',
  },
);

Iglesia.hasMany(Diezmador, {foreignKey:'id_iglesia'})

module.exports = Diezmador