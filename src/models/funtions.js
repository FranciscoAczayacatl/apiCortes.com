const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Functions = db.define("funciones",{
  id:{
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  nombre:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  activo:{
    type: DataTypes.BOOLEAN,
    allowNull:false,
  },
})

module.exports = Functions