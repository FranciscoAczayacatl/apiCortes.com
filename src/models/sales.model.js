const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const CompaniesAndBranches = require('./companies_branches.model');
const Customers = require('./customers');
const Users = require('./users.models');

const Sales = db.define('ventas',{
  id:{
    primaryKey:true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  total:{
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  pagado:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  
  clientes_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Customers ,
      key: 'id',
    }
  },
  user_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Users,
      key: 'id',
    }
  },
  empresas_sucursales_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: CompaniesAndBranches,
      key: 'id',
    }
  },
});

module.exports = Sales;

