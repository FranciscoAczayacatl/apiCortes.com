const db = require('../utils/database');
const {DataTypes} = require('sequelize');


const Costs = db.define("gastos", {
  id:{
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  ordinarios:{
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  provicion:{
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  tb:{
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  gastos:{
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
})

module.exports = Costs