const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const DateUtility = require('./dateUtility.model');
const UtilityDay = require('./utilityDay.model');
const CostUtility = require('./costsUtility.model');



const CostSaleDay = db.define("costo_ventas", {
  id:{
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
  },

  venta_costos_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: CostUtility,
      key: 'id',
    }
  },
  utilidad_dia_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: UtilityDay,
      key: 'id',
    }
  },
  fechas_utilidad_id:{
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: DateUtility,
      key: 'id',
    }
  },


})

module.exports = CostSaleDay