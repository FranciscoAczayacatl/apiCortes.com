const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Branch = require('./branch.model');
const Dates = require('./dates.model');

const Discharge = db.define('discharge',{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  concept:{
    type: DataTypes.STRING,
  },
  total:{
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  branch_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Branch,
      key: 'id',
    }
  },
  date_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Dates,
      key: 'id',
    }
  },
});

module.exports = Discharge