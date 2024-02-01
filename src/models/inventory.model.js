const db = require('../utils/database');
const {DataTypes}= require('sequelize');
const Products = require('./products.model');
const CompaniesAndBranches = require('./companies_branches.model');

const Inventory = db.define('inventario',{
  id:{
    primaryKey:true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  compras:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ventas:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  stock:{
    type: DataTypes.INTEGER,
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
  empresas_sucursales_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: CompaniesAndBranches,
      key: 'id',
    }
  },
});

module.exports = Inventory;