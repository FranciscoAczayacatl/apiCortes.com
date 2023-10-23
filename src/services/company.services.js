const Companies = require('../models/companies.model')

class CompaniesServices{
  static async creted(name){
    try {
      const result = await Companies.create({
        nombre:name
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async getCompanie(){
    try {
      const result = await Companies.findAll();
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getCompanieById(id){
    try {
      const result = await Companies.findByPk(id);
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = CompaniesServices