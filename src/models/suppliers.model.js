const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const CompaniesAndBranches = require('./companies_branches.model');


const Suppliers = db.define('provedores',{
  id:{
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },
  nombre_completo:{
    type: DataTypes.STRING,
    allowNull: false
  },
  calle:{
    type: DataTypes.STRING,
    allowNull:false,
  },
  numero:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  colonia:{
    type: DataTypes.STRING,
    allowNull: false
  },
  ciudad:{
    type: DataTypes.STRING,
    allowNull: false
  },
  codigo_postal:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  ciudad:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero_telefonico:{
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      len:[1, 10],
      isNumeric: true
    }
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

module.exports = Suppliers;