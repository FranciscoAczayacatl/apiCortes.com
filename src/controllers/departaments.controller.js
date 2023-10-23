const DepartamentsServices = require("../services/departaments.services")

const createDepartament = async(req,res)=>{
  try {
    const {nombre}= req.body
    const result = await DepartamentsServices.creted(nombre)
    res.status(201).json({
      result: result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getDepartaments = async(req, res)=>{
  try {
    const {empresas_sucurales_id} = req.body
    const result = await DepartamentsServices.getDepartaments(empresas_sucurales_id);
    res.status(200).json({
      result:result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getDepartamentById = async(req, res)=>{
  try {
    const {id} = req.params
    const result = await DepartamentsServices.getDepartamensById(id);
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
  createDepartament,
  getDepartaments,
  getDepartamentById
}