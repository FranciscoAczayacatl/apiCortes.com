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

module.exports = {
  createBranch
}