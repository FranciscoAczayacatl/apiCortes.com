const ConceptServices = require("../services/concept.services");

const createConcept = async(req, res) =>{
  try {
    const data = req.body;
    const result = await ConceptServices.creted(data)
    res.status(201).json({
      msj: 'ok',
      result: result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getConcept = async(req, res) =>{
  try {
    const {empresas_sucurales_id} = req.body
    console.log(empresas_sucurales_id);
    const result = await ConceptServices.get(empresas_sucurales_id)
    res.status(200).json({
      result: result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
  
}
const getConceptByID = async(req, res)=>{
  try {
    const {id} = req.params
    const result = await ConceptServices.getConceptsById(id);
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
  createConcept,
  getConcept,
  getConceptByID
}