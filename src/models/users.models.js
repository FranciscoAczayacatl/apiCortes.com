const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const Roles = require('./roles.model');
const Branch = require('./branch.model');
const Departments = require('./departments.model');
const Companies = require('./companies.model');
const CompaniesAndBranches = require('./companies_branches.model');
require('dotenv').config();

const Users = db.define('usuarios',{
  id:{
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  nombres:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido_materno:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido_paterno:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING,
    unique: true,
    validate:{
      isEmail: true,
    },
    allowNull: false,
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  token:{
    type: DataTypes.STRING,
  },
  logueado:{
    type: DataTypes.BOOLEAN
  },
  activo:{
    type: DataTypes.BOOLEAN,
    defaultValue:true
  },
  roles_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Roles,
      key: 'id',
    }
  },
  sucursal_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Branch,
      key: 'id',
    }
  },
  empresa_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model:Companies ,
      key: 'id',
    }
  },
  departamento_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Departments,
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

},{
  hooks:{
    beforeCreate: (user, options) =>{
      const {password} = user;
      const hash = bcrypt.hashSync(password, Number(process.env.HASH_COUNT));
      user.password = hash;
    }
  }
});

module.exports = Users;