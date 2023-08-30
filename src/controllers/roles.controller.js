const RolesService = require('../services/roles.services');

const getRole =async (req, res) =>{
  try {
    const {role_id}= req.body;
    const result = await RolesService.getRoleById(role_id);
    const {name} = result
    res.status(200).json({
      result:name
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}
const createRole =async (req, res) =>{
  try {
    const {name}= req.body;
    const result = await RolesService.created(name);
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
  createRole
}