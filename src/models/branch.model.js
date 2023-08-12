const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Branch = db.define("branch",{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false
  },
})

module.exports = Branch