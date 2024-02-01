const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const CompaniesAndBranches = require('./companies_branches.model');


const Customers = db.define('clientes',{
  id:{
    primaryKey:true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  nombre:{
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido_paterno:{
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  apellido_materno:{
    type: DataTypes.STRING,
    allowNull: false
  },
  calle:{
    type: DataTypes.STRING,
    allowNull: false
  },
  numero:{
    type: DataTypes.STRING,
    allowNull: false
  },
  colonia:{
    type: DataTypes.STRING,
    allowNull: false
  },
  ciudad:{
    type: DataTypes.STRING,
    allowNull: false
  },
  numero_telefonico:{
    type: DataTypes.STRING,
    allowNull: false
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

module.exports = Customers;