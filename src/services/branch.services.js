
const Branch = require('../models/branch.model')

class BranchServices{
  static async creted(name){
    try {
      const result = await Branch.create({
        nombre:name
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async getBranche(){
    try {
      const result = await Branch.findAll();
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getBrancheById(id){
    try {
      const result = await Branch.findByPk(id);
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = BranchServices