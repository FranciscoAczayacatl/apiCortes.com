const CompaniesServices = require("../services/company.services")

const createCompany = async(req,res)=>{
  try {
    const {name}= req.body
    const result = await CompaniesServices.creted(name)
    res.status(201).json({
      result: result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getCompany = async(req, res)=>{
  try {
    const result = await CompaniesServices.getCompanie();
    res.status(200).json({
      result:result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getCompanyById = async(req, res)=>{
  try {
    const {id} = req.params
    const result = await CompaniesServices.getCompanieById(id);
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
  createCompany,
  getCompany,
  getCompanyById 
}