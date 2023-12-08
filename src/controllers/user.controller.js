const UsersServices = require("../services/users.services")

const getUsers = async(req, res) =>{
  try {
    const {empresa_id} = req.body;
    const result =await UsersServices.getAllUSers(empresa_id);
    
    res.status(200).json({
      message: 'ok',
      result: result
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const deleteUser = async(req, res) =>{
  try {
    const {id} = req.params;
    const result = await UsersServices.deleteUserById(id)
    res.status(200).json({
      message: 'ok',
      result: result
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}
module.exports = {
  getUsers,
  deleteUser
}