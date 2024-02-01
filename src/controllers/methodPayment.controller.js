const MethodPaymentService = require("../services/methodPayment.service");

const getAll = async(req, res)=>{
  try {
    const result = await MethodPaymentService.getAllMethodPayment() ;
    res.status(200).json({
      result: result
    })
  } catch (error) {
    res.status(400).json({
      error:error.messaje
    })
  }
}

const create = async(req, res) =>{
  try {
    const data = req.body;
    const result = await MethodPaymentService.createMethodPayment(data);
    res.status(201).json({
      message: 'ok',
    })
  } catch (error) {
    res.status(400).json({
      error:error.messaje
    })
  }
}

const getAllByIdBarnchesCompany = async(req, res) =>{
  try {
    const {id} = req.params;
    const result = await MethodPaymentService.getAllMethodPaymentId(id);
    res.status(200).json({
      result: result
    })
  } catch (error) {
    res.status(400).json({
      error:error.messaje
    })
  }
}

module.exports ={
  getAll, 
  create,
  getAllByIdBarnchesCompany
}