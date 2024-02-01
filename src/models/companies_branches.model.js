const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Branch = require('./branch.model');
const Companies = require('./companies.model');

const CompaniesAndBranches= db.define("empresas_sucursales",{
  id:{
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  sucursal_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Branch,
      key: 'id',
    }
  },
  empresa_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Companies,
      key: 'id',
    }
  },
})

module.exports = CompaniesAndBranches