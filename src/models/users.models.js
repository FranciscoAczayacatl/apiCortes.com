const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const Roles = require('./roles.model');
const Branch = require('./branch.model');
require('dotenv').config();

const Users = db.define('users',{
  id:{
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  firstname:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname:{
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
  role_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Roles,
      key: 'id',
    }
  },
  branch_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Branch,
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