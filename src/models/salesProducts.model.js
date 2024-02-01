const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Products = require('./products.model');
const CompaniesAndBranches = require('./companies_branches.model');
const Sales = require('./sales.model');


const SalesProducts = db.define('ventas_productos',{
  id:{
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  productos_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Products,
      key: 'id',
    }
  },
  venta_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Sales,
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

})

module.exports = SalesProducts;