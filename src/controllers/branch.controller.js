const BranchServices = require("../services/branch.services")

const createBranch = async(req,res)=>{
  try {
    const {name}= req.body
    const result = await BranchServices.creted(name)
    res.status(201).json({
      result: result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getBranches = async(req, res)=>{
  try {
    const result = await BranchServices.getBranche();
    res.status(200).json({
      result:result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getBranchesByid = async(req, res)=>{
  try {
    const {id} = req.params
    const result = await BranchServices.getBrancheById(id);
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
  createBranch,
  getBranches,
  getBranchesByid 
}