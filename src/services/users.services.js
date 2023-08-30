const Users = require('../models/users.models');

class UsersServices{
  static async getAllUSers(){
    try {
      const result = await Users.findAll()
      return result
    } catch (error) {
      throw error
    }
  }

  static async deleteUserById(id){
    try {
      const result = await Users.destroy({
        where: {id}
      });
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = UsersServices