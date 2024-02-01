const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Sales = require('./sales.model');
const CompaniesAndBranches = require('./companies_branches.model');
const Customers = require('./customers');

const OutstandingDebts = db.define('deudas_pendientes',{
  id:{
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  total:{
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  pagado:{
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  venta_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Sales,
      key: 'id',
    }
  },
  clientes_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Customers ,
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

module.exports = OutstandingDebts;