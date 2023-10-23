const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Branch = require('./branch.model');
const Companies = require('./companies.model');

const CompaniesAndBranches= db.define("empresas_sucursales",{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  sucursal_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Branch,
      key: 'id',
    }
  },
  empresa_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Companies,
      key: 'id',
    }
  },
})

module.exports = CompaniesAndBranches