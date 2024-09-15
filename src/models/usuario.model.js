const { DataTypes,Model  } = require('sequelize');
const TipoUsuario = require('./tipoUsuario.model')

const sequelize = require('../db');

class Usuario extends Model {}

Usuario.init(
  {
    usuario_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    passwd: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue : 1
      },
    tipo_usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'Usuario',
  },
);

TipoUsuario.hasMany(Usuario, {foreignKey:'tipo_usuario_id'})

module.exports = Usuario