const Costs = require('../models/cost.model');
const CostSaleDay = require('../models/costSaleDay');
const CostUtility = require('../models/costsUtility.model');
const Utility = require('../models/utilityDay.model');

class UtilityService {
  
  static async create(trougput, gastos, utilidad, fechas_utilidad_id, empresas_sucursales_id){
    try {
      const result = await Utility.create({
      ventas: trougput,
      gastos: gastos,
      utilidad: utilidad,
      fechas_utilidad_id:fechas_utilidad_id, 
      empresas_sucurales_id:empresas_sucursales_id
      });
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getUtilityForDatesAndCompanyBranchId(fechas_utilidad_id, empresas_sucursales_id){
    try {
      const result = await Utility.findAll({
        where:{
          fechas_utilidad_id:fechas_utilidad_id, 
          empresas_sucurales_id:empresas_sucursales_id
        }
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async update(id,  newTrougput, newgastos, newUtility){
    try {
      const result = await Utility.update(
        {
          ventas: newTrougput,
          gastos: newgastos,
          utilidad: newUtility
        },{
          where: {
            id: id
          }
        }) 
        return result
    } catch (error) {
      throw error;
    }
  }

  static async getUtilityDay(empresas_sucursales_id){
    try {
      const result = await Utility.findAll({
        where:{
          empresas_sucurales_id:empresas_sucursales_id
        }
      })
      return result
    } catch (error) {
      throw error;
    }
  }

  static async getUtilityIdDay(fechas_utilidad_id, empresas_sucursales_id){
    try {
      const result = await Utility.findAll({
        where:{
          fechas_utilidad_id:fechas_utilidad_id, 
          empresas_sucurales_id:empresas_sucursales_id
        },
        include:{
          as:'d_utildad_costo_v',
          model:CostSaleDay,
          attributes:{
            exclude:['venta_costos_id','utilidad_dia_id','fechas_utilidad_id','createdAt','updatedAt','utilidad_id']
          },
          include:{
            as:'costo_utilidad_dia',
            model:CostUtility,
            attributes:{
              exclude:['id','gastos_id','empresas_sucurales_id','user_id','createdAt','updatedAt']
            },
            include:{
              as:'costo_utilida_pivote',
              model:Costs,
              attributes:{
                exclude:['id','createdAt','updatedAt']
              },
            }
          }
        }
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async getUtilityIdDayTableDetail(fechas_utilidad_id, empresas_sucursales_id){
    try {
      const result = await Utility.findAll({
        where:{
          fechas_utilidad_id:fechas_utilidad_id, 
          empresas_sucurales_id:empresas_sucursales_id
        },
        include:{
          as:'d_utildad_costo_v',
          model:CostSaleDay,
          attributes:{
            exclude:['venta_costos_id','utilidad_dia_id','fechas_utilidad_id','createdAt','updatedAt','utilidad_id']
          },
          include:{
            as:'costo_utilidad_dia',
            model:CostUtility,
            attributes:{
              exclude:['id','gastos_id','empresas_sucurales_id','user_id','updatedAt']
            },
            include:{
              as:'costo_utilida_pivote',
              model:Costs,
              attributes:{
                exclude:['id','createdAt','updatedAt']
              },
            }
          }
        }
      })
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = UtilityService;