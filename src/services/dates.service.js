const { Op } = require('sequelize');
const Dates = require('../models/dates.model')
class DatesService {

  static async dateVerify(date){
    try {
  
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0); 
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      const result = await Dates.findAll({
        where: {
          date: {
            [Op.between]: [startOfDay, endOfDay]
          }
        },
      });

      return result.length > 0 ? result : null;
      
    } catch (error) {
      throw error
    }
  }

  static async createDate(dateCreate){
    try {
      const result = await Dates.create({
        date:dateCreate
      });
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = DatesService