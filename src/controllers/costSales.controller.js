const CostSalesService = require("../services/costSales.services")

const getSalesByDateAndComapanyBranches = async(req, res)=>{
  try {
    const {id}= req.body
    const result = await CostSalesService.find(id)
    res.status(201).json({
      result: result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }

}

module.exports={
  getSalesByDateAndComapanyBranches
}