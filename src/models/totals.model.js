const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Dates = require('./dates.model');
const CompaniesAndBranches = require('./companies_branches.model');


const Totals = db.define('totales',{
  id:{
    primaryKey:true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  entry:{
    type: DataTypes.DOUBLE,
    allowNull: false,

  },
  discharge:{
    type: DataTypes.DOUBLE,
    allowNull: false,

  },
  total:{
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  result:{
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Dates,
      key: 'id',
    }
  },
  empresas_sucurales_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: CompaniesAndBranches,
      key: 'id',
    }
  },
});

module.exports = Totals