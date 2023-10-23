const Concept = require('../models/concept.model')
class ConceptServices {

  static async creted(data){
    try {
      const result = await Concept.create(data)
      return result
    } catch (error) {
      throw error
    }
  }

  static async get(empresas_sucurales_id){
    try {
      const result = await Concept.findAll({
        where:{
          empresas_sucurales_id
        }
      });
      return result
    } catch (error) {
      throw error
    }
  }

  static async getConceptsById(id){
    try {
      const result = await Concept.findByPk(id);
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = ConceptServices