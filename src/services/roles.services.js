const Roles = require('../models/roles.model');

class RolesService{

  static async get(){
    try {
      const result = await Roles.findAll();
      return result;
    } catch (error) {
      throw error
    }
  }

  static async created(nombre){
    try {
      const result = await Roles.create({
        nombre:nombre
      });
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getByID(id){
    try {
      const result = await Roles.findByPk(id);
      return result;
    } catch (error) {
      throw error
    }
  }
}
module.exports = RolesService