const Entry = require('../models/entry.model')
const { Op } = require('sequelize');
const Users = require('../models/users.models');

class EntryService {
  static async entryCreted(detail,classification, total, branch_id, id,user_id,){
    try {
      const result = await Entry.create({
        detail: detail,
        classification:classification,
        total: total,
        branch_id: branch_id, 
        date_id:id,
        user_id:user_id
      })
      return result;
    } catch (error) {
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
        attributes:['id','classification','detail','total','createdAt'],
        include:{
          model:Users,
          as:'entryusers',
          attributes:['firstname','lastname']
        }
      });
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = EntryService