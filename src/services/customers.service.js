const Customers = require("../models/customers");



class CustomersService {
  static async getAllCustomer(){
    try {
      const result = await Customers.findAll();
      return result
    } catch (error) {
      throw error
    }
  }

  static async createCustomer(data) {
    try {
      const result = await Customers.create(data)
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getAllCustomerBC(id){
    try {
      const result = await Customers.findAll({
        where:{
          empresas_sucursales_id: id
        },

      })
      return result;
    } catch (error) {
      throw error
    }
  }


}

module.exports = CustomersService;