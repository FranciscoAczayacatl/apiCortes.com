const Suppliers  = require("../models/suppliers.model");

class SuppliersService {
  static async getAllSupplier(){
    try {
      const result = await Suppliers.findAll();
      return result
    } catch (error) {
      throw error
    }
  }

  static async createSupplier(data) {
    try {
      const result = await Suppliers.create(data)
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getAllSupplierBC(id){
    try {
      const result = await Suppliers.findAll({
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

module.exports = SuppliersService;