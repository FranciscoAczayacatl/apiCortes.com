const Branch = require('../models/branch.model');
const Companies = require('../models/companies.model');
const CompaniesAndBranches = require('../models/companies_branches.model')

class CompaniesAndBranchesServices{
  static async creted(data){
    try {
      const result = await CompaniesAndBranches.create(data)
      return result
    } catch (error) {
      throw error
    }
  }

  static async getBC(){
    try {
      const result = await CompaniesAndBranches.findAll();
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getBCById(id){
    try {
      const result = await CompaniesAndBranches.findByPk(id);
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getByCompany(empresa_id){
    try {
      const result = await CompaniesAndBranches.findAll({
        where:{
          empresa_id:empresa_id,

        },
        include:{
          as:'branch_companie_brances',
          model:Branch
        }

      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CompaniesAndBranchesServices