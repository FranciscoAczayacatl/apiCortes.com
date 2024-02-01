const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Sales = require('./sales.model');
const MethodPayment = require('./methodPayment');
const CompaniesAndBranches = require('./companies_branches.model');


const SalesMethodPayments = db.define('venta_metodo_pago',{
  id:{
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull:false
  },
  referencia:{
    type: DataTypes.STRING,
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
  metodo_pago_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: MethodPayment,
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

module.exports = SalesMethodPayments