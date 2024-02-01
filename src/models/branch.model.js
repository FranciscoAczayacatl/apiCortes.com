const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Branch = db.define("sucursales",{
  id:{
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  nombre:{
    type: DataTypes.STRING,
    allowNull: false
  },
})

module.exports = Branch;