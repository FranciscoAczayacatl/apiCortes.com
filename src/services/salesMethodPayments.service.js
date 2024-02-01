const SalesMethodPayments = require("../models/salesMethodPayments");

class SalesMethodPaymentsService {

  static async created(salesID ,empresas_sucursales_id,metodo_pago_id,referencia){
    try {
      const result = await SalesMethodPayments.create(
        {
          referencia:referencia,
          venta_id:salesID,
          metodo_pago_id:metodo_pago_id,
          empresas_sucursales_id: empresas_sucursales_id
        }
      )
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = SalesMethodPaymentsService;