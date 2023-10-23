const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const CompaniesAndBranches = require('./companies_branches.model');

const Departments = db.define("departamentos",{
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
  empresas_sucurales_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue:1,
    references: {
      model: CompaniesAndBranches,
      key: 'id',
    }
  },
})

module.exports = Departments