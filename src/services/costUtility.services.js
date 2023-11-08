const CostUtility = require('../models/costsUtility.model');

class CostUtilityService {
  static async create(venta, costo, trougput, empresas_sucursales_id, user_id, gastos_id){
    try {
      const result = await CostUtility.create({
        ventas: venta, 
        costos: costo, 
        trougput: trougput, 
        gastos_id: gastos_id,
        empresas_sucurales_id: empresas_sucursales_id, 
        user_id:user_id
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = CostUtilityService;