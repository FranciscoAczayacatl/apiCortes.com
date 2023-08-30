const Branch = require('../models/branch.model')

class BranchServices{
  static async creted(name){
    try {
      const result = await Branch.create({
        name:name
      })
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = BranchServices