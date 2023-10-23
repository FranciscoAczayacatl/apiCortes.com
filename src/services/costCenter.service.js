const CostCenter = require('../models/costCenter.model')

class CostCenterServices{
  
  static async creted(data){
    try {
      const result = await CostCenter.create(data)
      return result
    } catch (error) {
      throw error
    }
  }

  static async getCostCenter(empresas_sucurales_id){
    try {
      const result = await CostCenter.findAll(
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

  static async getCostscenterById(id){
    try {
      const result = await CostCenter.findByPk(id);
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = CostCenterServices