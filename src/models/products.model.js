const db = require('../utils/database');
const {DataTypes}= require('sequelize');
const Categories = require('./categories.model');
const Suppliers = require('./suppliers.model');
const CompaniesAndBranches = require('./companies_branches.model');

const Products = db.define('productos',{
  id:{
    primaryKey:true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  nombre:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio_publico:{
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  precio_compra:{
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  descripcion:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  stock:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  codigo:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  min_stock:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  categorias_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Categories,
      key: 'id',
    }
  },
  provedores_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Suppliers,
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

module.exports = Products;