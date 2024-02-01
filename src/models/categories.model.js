const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const CompaniesAndBranches = require('./companies_branches.model');

const Categories = db.define('categorias',{
  id:{
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,

  }, 
  nombre:{
    type: DataTypes.STRING,
    allowNull: false,
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

module.exports = Categories;