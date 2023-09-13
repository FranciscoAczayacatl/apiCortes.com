const Concept = require('../models/concept.model')
class ConceptServices {

  static async creted(concept){
    try {
      const result = await Concept.create({
        name:concept
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async get(){
    try {
      const result = await Concept.findAll();
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = ConceptServices