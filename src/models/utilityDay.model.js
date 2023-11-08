const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const CompaniesAndBranches = require('./companies_branches.model');
const DateUtility = require('./dateUtility.model');



const UtilityDay = db.define("utilidad_dia", {
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  ventas:{
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  gastos:{
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  utilidad:{
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  fechas_utilidad_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: DateUtility,
      key: 'id',
    }
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

module.exports = UtilityDay