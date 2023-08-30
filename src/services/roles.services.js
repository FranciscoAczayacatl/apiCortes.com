const Roles = require('../models/roles.model');

class RolesService{

  static async getRoleById(id){
    try {
      const result = await Roles.findByPk(id);
      return result;
    } catch (error) {
      throw error
    }
  }

  static async created(name){
    try {
      const result = await Roles.create({
        name:name
      });
      return result
    } catch (error) {
      throw error
    }
  }
}
module.exports = RolesService