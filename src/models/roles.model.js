const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Roles = db.define("rol",{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  nombre:{
    type: DataTypes.STRING,
    allowNull: false
  },
})

module.exports = Roles