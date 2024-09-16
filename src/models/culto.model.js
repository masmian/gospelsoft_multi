const { DataTypes,Model  } = require('sequelize');
const Iglesia = require('./iglesia.model')

const sequelize = require('../db');

class Culto extends Model {}

Culto.init(
  {
    culto_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true
    },
    id_iglesia: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_culto: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    numero_culto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    sequelize,
    modelName: 'Culto',
  },
);

Iglesia.hasMany(Culto, {foreignKey:'id_iglesia'})

module.exports = Culto