const User = require('../models/users.models');
const bcrypt = require('bcrypt');
const jwt =require("jsonwebtoken");
const Roles = require('../models/roles.model');
const Branch = require('../models/branch.model');
const Companies = require('../models/companies.model');
const Departments = require('../models/departments.model');
require('dotenv').config;

class AuthServices {

  static async register(user){
    try {
      const result = await User.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async login(credentials){
    try {
      const {email, password} = credentials;
      const user = await User.findOne(
        {
          where: {email},
          attributes:{exclude:['roles_id','createdAt','updatedAt','sucursal_id','empresa_id','departamento_id']},
          include: [
            {
              model: Roles,
              as:'rol_id',
              attributes:['nombre', 'id']
            },
            {
              model: Branch,
              as:'sucursales_id',
              attributes:['nombre', 'id']
            }, 
            {
              model: Companies,
              as:'empresas_id',
              attributes:['nombre', 'id']
            },
            {
              model: Departments,
              as:'departamentos_id',
              attributes:['nombre', 'id']
            }
          
          ] 
      });
      if(user){
        const isvalid = bcrypt.compareSync(password, user.password);
        return isvalid ? {isvalid, user} : {isvalid}
      }
      return {isvalid: false}
    } catch (error) {
      throw error;
    }
  }

  static genToken(data){
    try {
      const token =jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: '1d',
        algorithm: "HS512"
      });
      
      return token;
    } catch (error) {
      throw error;
    }
  }

  static async updateTokenAndActive(token, id){
    try {
      const result = await User.update(
        {
          token:token,
          logueado:true
        },{
          where:{id}
        }
      
      );
      return result
    } catch (error) {
      throw error 
    }
  }

}

module.exports = AuthServices;