const TotalService = require("../services/total.service");

const getTotals = async(req, res)=>{
  try {
    const {branch_id} = req.body
    const result = await TotalService.getTotalByBranchId(branch_id);
    console.log(result);
    console.log(branch_id);
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
  getTotals
}