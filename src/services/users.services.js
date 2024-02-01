const Branch = require('../models/branch.model');
const Companies = require('../models/companies.model');
const Departments = require('../models/departments.model');
const Roles = require('../models/roles.model');
const Users = require('../models/users.models');

class UsersServices{
  static async getAllUSers(empresa_id,sucursal_id){
    try {
      const result = await Users.findAll({
        where:{
          empresa_id: empresa_id,
          sucursal_id:sucursal_id
        },
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
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async deleteUserById(id){
    try {
      const result = await Users.update({
        activo:false
      },{
        where: {id}
      });
      return result
    } catch (error) {
      throw error
    }
  }

  static async getUserById(id){
    try {
      const result = await Users.findByPk(id);
      return result
    } catch (error) {
      throw error;
    }
  }

  static async activateUserById(id){
    try {
      const result = await Users.update({
        activo:true
      },{
        where: {id}
      });
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = UsersServices