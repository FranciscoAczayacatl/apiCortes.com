const CostCenterService = require("../services/costCenter.service")


const createCostCenter = async(req, res)=>{
  try {
    const data= req.body
    const result = await CostCenterService.creted(data)
    res.status(201).json({
      result: result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getCostCenter = async(req, res)=>{
  try {
    const {empresas_sucurales_id} = req.body
    const result = await CostCenterService.getCostCenter(empresas_sucurales_id);
    res.status(200).json({
      result:result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getCostCenterByID = async(req, res)=>{
  try {
    const {id} = req.params
    const result = await CostCenterService.getCostscenterById(id);
    res.status(200).json({
      result:result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

module.exports ={
  createCostCenter,
  getCostCenter,
  getCostCenterByID
}