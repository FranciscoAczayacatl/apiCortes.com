const MethodPayment = require("../models/methodPayment");


class MethodPaymentService {
  static async getAllMethodPayment(){
    try {
      const result = await MethodPayment.findAll();
      return result
    } catch (error) {
      throw error
    }
  }

  static async createMethodPayment(data) {
    try {
      const result = await MethodPayment.create(data)
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getAllMethodPaymentId(id){
    try {
      const result = await MethodPayment.findAll({
        where:{
          empresas_sucursales_id: id
        }
      })
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = MethodPaymentService;