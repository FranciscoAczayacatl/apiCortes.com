const Entry = require('../models/entry.model')
const { Op, DOUBLE } = require('sequelize');
const Users = require('../models/users.models');
const Concept = require('../models/concept.model');
const Clasificasion = require('../models/classification.model');
const CostCenter = require('../models/costCenter.model');
const Departments = require('../models/departments.model');

class EntryService {
  static async entryCreted(empresas_sucurales_id, total, user_id, clasificasion_id ,departamentos_id, concepto_id, observations, centro_costo_id, fecha_id){
    try {
      console.log(total);
      const result = await Entry.create({
        empresas_sucurales_id: empresas_sucurales_id ,
        total:total,
        user_id: user_id,
        clasificasion_id: clasificasion_id,
        departamentos_id: departamentos_id, 
        concepto_id: concepto_id,
        observations:observations,
        centro_costo_id: centro_costo_id,
        fecha_id

      })
      return result;
    } catch (error) {
      console.log(error);
      throw error
    }
  }
  static async getEntryByDateAndBranch(date, empresas_sucurales_id){
    try {
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0); 
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      const result = await Entry.findAll({
        where: {
          createdAt: {
            [Op.between]: [startOfDay, endOfDay]
          },
          empresas_sucurales_id:empresas_sucurales_id,
        },
        attributes:['id', 'observations','total','createdAt'],
        include:[
          {
            model:Users,
            as:'entryusers',
            attributes:['nombres','apellido_materno', 'apellido_paterno']
          },
          {
            model:Concept,
            as:'entryconcept',
            attributes:['nombre']
          },
          {
            model: Clasificasion,
            as:'entryclasificasion',
            attributes:['nombre']
          },
          {
            model: CostCenter,
            as:'costcenterentry',
            attributes:['nombre']
          }
          ,
          {
            model: Departments,
            as:'ingresodepartamentos',
            attributes:['nombre']
          }
        ],
        
      });
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = EntryService