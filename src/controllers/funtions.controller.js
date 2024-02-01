const FuntionsServices = require("../services/funtions.services");

const getFunctions = async(req, res) => {
  try {
    const result = await FuntionsServices.getAllFuntions();
    res.status(200).json({
      result: result,
    })
  } catch (error) {
    res.status(400).json({
      error: error
    })
  }
}
const createFunctions = async(req, res) => {
  try {
    const {	nombre, activo} = req.body;
    const result = await FuntionsServices.funtionsCreate(nombre, activo);
    res.status(201).json({
      result: result,
    })
  } catch (error) {
    res.status(400).json({
      error: error
    })
  }
}
const getFunctionsById = async(req, res) => {
  try {
    const {id} = req.body;
    const result = await FuntionsServices.getById(id);
    res.status(200).json({
      result:result,
    });
  } catch (error) {
    res.status(400).json({
      error: error
    })
  }
}

module.exports ={
  getFunctions,
  createFunctions,
  getFunctionsById,
}
