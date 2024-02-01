const SalesProducts = require("../models/salesProducts.model");

class SalesProductsServices{
  static async create(idProducto,empresas_sucursales_id,salesID){
    try {
      const res = await SalesProducts.create({
        productos_id:idProducto,
        empresas_sucursales_id:empresas_sucursales_id,
        venta_id:salesID
      });
      return res;
    } catch (error) {
      throw error
    }
  }
}

module.exports = SalesProductsServices;