const Classification = require('../models/classification.model')

class ClassificationServices{
  static async creted(data){
    try {
      const result = await Classification.create(data)
      return result
    } catch (error) {
      throw error
    }
  }

  static async getClassification(empresas_sucurales_id){
    try {
      const result = await Classification.findAll(
        {
          where:{
            empresas_sucurales_id
          }
        }
      );
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getClassificationById(id){
    try {
      const result = await Classification.findByPk(id);
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = ClassificationServices