const AuthServices = require('../services/auth.services');

const register = async (req, res) => {
  try {
    const user = req.body;
    const result = await AuthServices.register(user);
    if (result) {
      res.status(201).json({message: 'user created'});
    } else{
      res.status(400).json({message: 'something wrong'});
    }

  } catch (error) {
    res.status(400).json(error.message);
  }
}

const userLogin = async (req, res) => {
  try {
    const { email , password} = req.body;
    if (!email) {
      res.status(400).json({
        error: "Missing data",
        message: "not email  provided"
      });
    }
    if (!password) {
      res.status(400).json({
        error: "Missing data",
        message: "not password provided"
      });
    }
    const result = await AuthServices.login({email, password});
    if (result.isvalid) {
      const {firstname, id, email,lastname ,role_id, branch_id} = result.user;
      const userData = {firstname, id, email};
      const token = AuthServices.genToken(userData);

      res.json({
        user:{
          id,
          firstname,
          lastname,
          email,
          role_id,
          branch_id
        },
        token:token
      });
    }else{
      res.status(400).json({message: 'user not fount'})
    }
    
  } catch (error) {
    res.status(400).json({
      error: "Something wrong ",
      
    });
  }
}

module.exports ={
  register,
  userLogin
}