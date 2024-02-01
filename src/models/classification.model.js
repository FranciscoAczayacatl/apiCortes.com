const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const CompaniesAndBranches = require('./companies_branches.model');

const Clasificasion = db.define("clasificasion", {
  id:{
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  empresas_sucurales_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: CompaniesAndBranches,
      key: 'id',
    }
  },
})

module.exports = Clasificasion