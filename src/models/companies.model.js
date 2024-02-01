const db = require('../utils/database');
const {DataTypes} = require('sequelize');

const Companies = db.define("empresas",{
  id:{
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  nombre:{
    type: DataTypes.STRING,
    allowNull: false
  },
})

module.exports = Companies