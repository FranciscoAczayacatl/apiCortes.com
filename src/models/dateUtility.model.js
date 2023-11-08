const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const CompaniesAndBranches = require('./companies_branches.model');



const DateUtility = db.define("fechas_utildad", {
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  Date:{
    type: DataTypes.DATE,
    allowNull: false,
  },
  empresas_sucurales_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: CompaniesAndBranches,
      key: 'id',
    }
  },

})

module.exports = DateUtility