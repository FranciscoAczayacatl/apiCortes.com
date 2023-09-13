const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Branch = require('./branch.model');
const Dates =require('./dates.model');
const Users = require('./users.models');
const Concept = require('./concept.model');

const Entry = db.define('entry',{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  classification:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  observations:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  cost_center:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  departament:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  total:{
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  branch_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model:Branch,
      key:'id',
    }
  },
  date_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Dates,
      key: 'id',
    }
  },
  user_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Users,
      key: 'id',
    }
  },
  concept_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Concept,
      key: 'id',
    }
  },
});

module.exports = Entry