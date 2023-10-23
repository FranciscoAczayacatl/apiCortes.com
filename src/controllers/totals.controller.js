const TotalService = require("../services/total.service");

const getTotals = async(req, res)=>{
  try {
    const {empresas_sucurales_id} = req.body
    const result = await TotalService.getTotalByBranchId(empresas_sucurales_id);
    res.status(200).json({
      result: result
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getTotalById = async(req, res) =>{
  try {
    const {id} = req.params;
    const result = await TotalService.getTotalById(id);
    res.status(200).json({
      result: result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

module.exports = {
  getTotals,
  getTotalById
}