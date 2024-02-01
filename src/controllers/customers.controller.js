const CustomersService = require("../services/customers.service");


const getAll = async(req, res)=>{
  try {
    const result = await CustomersService.getAllCustomer() ;
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
    const result = await CustomersService.createCustomer(data);
    res.status(201).json({
      message: 'ok',
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error:error.messaje
    })
  }
}

const getAllByIdBarnchesCompany = async(req, res) =>{
  try {
    const {id} = req.params;
    const result = await CustomersService.getAllCustomerBC(id);
    res.status(200).json({
      result: result
    })
  } catch (error) {
    console.log(error);
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