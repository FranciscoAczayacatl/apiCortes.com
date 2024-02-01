const OutstandingDebts = require("../models/outstandingDebts")

class OutstandingDebtsService{
  static async created(total,empresas_sucursales_id,salesID,pagado,clientes_id){
    try {
      const result = await OutstandingDebts.create(
        {
          total: total,
          pagado: pagado,
          venta_id: salesID,
          clientes_id: clientes_id,
          empresas_sucursales_id: empresas_sucursales_id
        }
      )

      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = OutstandingDebtsService