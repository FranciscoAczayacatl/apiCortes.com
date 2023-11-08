const SaleUtility = require('../models/saleUtility.model');

class SaleUtilityService {

  static async create(venta, empresas_sucursales_id, user_id){
    try {
      const result = SaleUtility.create({
        total: venta, 
        empresas_sucurales_id:empresas_sucursales_id,
        user_id:user_id
      });
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = SaleUtilityService