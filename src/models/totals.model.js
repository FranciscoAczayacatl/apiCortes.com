const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Branch = require('./branch.model')
const Dates = require('./dates.model')


const Totals = db.define('totals',{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  entry:{
    type: DataTypes.DOUBLE,
    allowNull: false,

  },
  discharge:{
    type: DataTypes.DOUBLE,
    allowNull: false,

  },
  total:{
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  result:{
    type: DataTypes.STRING,
    allowNull: false
  },
  date_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Dates,
      key: 'id',
    }
  },
    branch_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Branch,
      key: 'id',
    }
  },
});

module.exports = Totals