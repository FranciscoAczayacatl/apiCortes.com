const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Users = require('./users.models');
const Functions = require('./funtions');

const FunctionsUser = db.define("funciones_usuario",{
  id:{
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  user_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Users,
      key: 'id',
    }
  },
  funciones_id:{
    type: DataTypes.UUID,
    allowNull:false,
    references:{
      model:{
        model:Functions,
        key:'id',
      }
    }
  }
})

module.exports = FunctionsUser