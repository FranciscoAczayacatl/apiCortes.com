const CompaniesAndBranchesServices = require("../services/branchesAndCompany.services")

const createBranchesAndCompanies = async(req,res)=>{
  try {
    const data= req.body
    const result = await CompaniesAndBranchesServices.creted(data)
    res.status(201).json({
      result: result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getBranchesAndCompanies = async(req, res)=>{
  try {
    const result = await CompaniesAndBranchesServices.getBC();
    res.status(200).json({
      result:result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getBranchesAndCompaniesById = async(req, res)=>{
  try {
    const {id} = req.params
    const result = await CompaniesAndBranchesServices.getBCById(id);
    res.status(200).json({
      result:result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getBranchesAndCompaniesByCompany = async(req, res) =>{
  try {
    const {empresa_id}= req.body;
    console.log(empresa_id);
    const result = await CompaniesAndBranchesServices.getByCompany(empresa_id);
    res.status(200).json({
      result:result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}
module.exports = {
  createBranchesAndCompanies,
  getBranchesAndCompanies,
  getBranchesAndCompaniesById,
  getBranchesAndCompaniesByCompany
}