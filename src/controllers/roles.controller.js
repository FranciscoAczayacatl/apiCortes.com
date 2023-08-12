const RolesService = require('../services/roles.services');

const getRole =async (req, res) =>{
  try {
    const a = req.body
    const {role_id}= req.body;
    console.log(a);
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

module.exports = {
  getRole
}