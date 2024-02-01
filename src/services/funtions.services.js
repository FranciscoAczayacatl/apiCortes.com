const Functions = require("../models/funtions");

class FuntionsServices{

  static async getAllFuntions(){
    try {
      const result = await Functions.findAll();
      return result
    } catch (error) {
      throw error
    }
  }

  static async  funtionsCreate(nombre, activo){
    try {
      const result = await Functions.create({
        nombre: nombre,
        activo: activo
      })
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getById(id){
    try {
      const result = await Functions.findByPk(id);
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = FuntionsServices;