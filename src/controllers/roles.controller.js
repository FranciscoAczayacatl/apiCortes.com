const RolesService = require('../services/roles.services');

const getRole =async (req, res) =>{
  try {

    const result = await RolesService.get();
      res.status(200).json({
      result: result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}
const createRole =async (req, res) =>{
  try {
    const {nombre}= req.body;
    const result = await RolesService.created(nombre);
    res.status(201).json({
      result:result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getRoleID = async(req, res)=>{
  try {
    const {id}= req.params;
    const result = await RolesService.getByID(id);
    res.status(201).json({
      result:result
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

module.exports = {
  getRole,
  createRole,
  getRoleID
}