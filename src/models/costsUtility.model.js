const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const CompaniesAndBranches = require('./companies_branches.model');
const Users = require('./users.models');
const Costs = require('./cost.model');

const CostUtility = db.define("ventas_costos", {
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  ventas:{
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  costos:{
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  trougput:{
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  gastos_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Costs,
      key: 'id',
    }
  },
  empresas_sucurales_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: CompaniesAndBranches,
      key: 'id',
    }
  },
  user_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: 'id',
    }
  }
})

module.exports = CostUtility