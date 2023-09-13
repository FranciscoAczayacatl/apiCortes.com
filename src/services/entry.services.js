const Entry = require('../models/entry.model')
const { Op } = require('sequelize');
const Users = require('../models/users.models');
const Concept = require('../models/concept.model');

class EntryService {
  static async entryCreted(classification, total, branch_id, id,user_id,deapatarment,concept_id,observaciones,costCenter){
    try {
      const result = await Entry.create({
        classification:classification,
        total: total,
        branch_id: branch_id, 
        date_id:id,
        user_id:user_id,
        departament:deapatarment,
        concept_id:concept_id,
        observations:observaciones,
        cost_center :costCenter

      })
      return result;
    } catch (error) {
      console.log(error);
      throw error
    }
  }
  static async getEntryByDateAndBranch(date, branch_id){
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
          branch_id:branch_id
        },
        attributes:['id','classification','total','createdAt','departament','cost_center','observations'],
        include:[
          {
            model:Users,
            as:'entryusers',
            attributes:['firstname','lastname']
          },
          {
            model:Concept,
            as:'Entryconcept',
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