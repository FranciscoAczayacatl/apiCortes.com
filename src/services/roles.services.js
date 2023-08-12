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
}
module.exports = RolesService