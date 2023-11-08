const Departaments = require('../models/departments.model')

class DepartamentsServices{
  static async creted(nombre,empresas_sucurales_id){
    try {
      const result = await Departaments.create({
        nombre:nombre,
        empresas_sucurales_id:empresas_sucurales_id
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async getDepartaments(empresas_sucurales_id){
    try {
      const result = await Departaments.findAll(
        {
          where:{
            empresas_sucurales_id:empresas_sucurales_id
          }
        }
      );
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getDepartamensById(id){
    try {
      const result = await Departaments.findByPk(id);
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = DepartamentsServices