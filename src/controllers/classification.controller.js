const ClassificationServices = require("../services/classification.services")


const createclassification = async(req, res)=>{
  try {
    const data= req.body
    const result = await ClassificationServices.creted(data)
    res.status(201).json({
      result: result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getclassification = async(req, res)=>{
  try {
    const {empresas_sucurales_id} = req.body
    const result = await ClassificationServices.getClassification(empresas_sucurales_id);
    res.status(200).json({
      result:result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getclassificationById = async(req, res)=>{
  try {
    const {id} = req.params
    const result = await ClassificationServices.getClassificationById(id);
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
  createclassification,
  getclassification,
  getclassificationById
}

