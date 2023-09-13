const ConceptServices = require("../services/concept.services");

const createConcept = async(req, res) =>{
  try {
    const {concept} = req.body;
    const result = await ConceptServices.creted(concept)
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
    const result = await ConceptServices.get()
    res.status(200).json({
      result: result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

module.exports ={
  createConcept,
  getConcept
}