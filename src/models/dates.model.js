const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Dates = db.define("dates",{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  date:{
    type: DataTypes.DATE,
    allowNull: false
  },
})

module.exports = Dates