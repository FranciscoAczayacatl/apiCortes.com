const CostSaleDay = require('../models/costSaleDay');
const CostUtility = require('../models/costsUtility.model');
const Cost = require('../models/cost.model');

class CostSalesService{
  static async create(venta_costos_id,utilidad_dia_id, fechas_utilidad_id){
    try {
      const result = await CostSaleDay.create({
        venta_costos_id: venta_costos_id, 
        utilidad_id: utilidad_dia_id,
        utilidad_dia_id: utilidad_dia_id,
        fechas_utilidad_id: fechas_utilidad_id,
      });
      return result
    } catch (error) {
      throw error
    }
  }

  static async find(id){
    try {
      const result = await CostSaleDay.findAll({
        where:{
          utilidad_id:id
        },
        include:[
          {
            as:'costo_utilidad_dia',
            model:CostUtility,
            include:{
              as:'costo_utilida_pivote',
              model:Cost
            }
          },
          
        ]
      });
      return result
    } catch (error) {
      throw error
    }
  }


}

module.exports = CostSalesService;