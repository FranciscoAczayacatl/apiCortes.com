const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Dates = require('./dates.model');
const Users = require('./users.models');
const Concept = require('./concept.model');
const CostCenter = require('./costCenter.model');
const Departments = require('./departments.model');
const Clasificasion = require('./classification.model');
const CompaniesAndBranches = require('./companies_branches.model');

const Discharge = db.define('egreso',{
  id:{
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  observaciones:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  total:{
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  clasificasion_id:{
    type: DataTypes.UUID,
    references: {
      model: Clasificasion,
      key: 'id',
    }
  },
  concepto_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Concept,
      key: 'id',
    }
  },
  centro_costo_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: CostCenter,
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
  departamentos_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Departments,
      key: 'id',
    }
  },

  fecha_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Dates,
      key: 'id',
    }
  },
  user_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Users,
      key: 'id',
    }
  },


});

module.exports = Discharge