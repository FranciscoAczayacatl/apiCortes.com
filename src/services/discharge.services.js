const Discharge = require('../models/discharge.model')
const { Op } = require('sequelize');
const Users = require('../models/users.models');
const Concept = require('../models/concept.model');
const Clasificasion = require('../models/classification.model');
const CostCenter = require('../models/costCenter.model');
const Departments = require('../models/departments.model');

class DischargeService {
  static async DischargeCreted(empresas_sucurales_id, total, user_id, clasificasion_id ,departamentos_id, concepto_id, observations, centro_costo_id, fecha_id){
    try {
      console.log(total);
      const result = await Discharge.create({
        empresas_sucurales_id: empresas_sucurales_id ,
        total: -total,
        user_id: user_id,
        clasificasion_id: clasificasion_id,
        departamentos_id: departamentos_id, 
        concepto_id: concepto_id,
        observaciones:observations,
        centro_costo_id: centro_costo_id,
        fecha_id

      })
      return result;
    } catch (error) {
      console.log(error);
      throw error
    }
  }

  static async getDischargeByDateAndBranch(date, empresas_sucurales_id){
    try {
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0); 
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      const result = await Discharge.findAll({
        where: {
          createdAt: {
            [Op.between]: [startOfDay, endOfDay]
          },
          empresas_sucurales_id:empresas_sucurales_id
        },
        attributes:['id', 'observaciones','total','createdAt'],
        include:[
          {
            model:Users,
            as:'dischargeusers',
            attributes:['nombres','apellido_materno', 'apellido_paterno']
          },
          {
            model:Concept,
            as:'dischargeconcept',
            attributes:['nombre']
          },
          {
            model: Clasificasion,
            as:'dischargeclasificasion',
            attributes:['nombre']
          },
          {
            model: CostCenter,
            as:'costcenterdischarge',
            attributes:['nombre']
          }
          ,
          {
            model: Departments,
            as:'dischargedepartamentos',
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

module.exports = DischargeService