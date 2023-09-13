const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Concept = db.define("concept", {
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "valor faltante"
  }
})

module.exports = Concept