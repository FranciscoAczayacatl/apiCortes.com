const { Op } = require('sequelize');
const DateUtility = require('../models/dateUtility.model');

class DatesUtilityServices {

  static async dateVerify(date,empresas_sucurales_id){
    try {
  
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0); 
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      const result = await DateUtility.findAll({
        where: {
          Date: {
            [Op.between]: [startOfDay, endOfDay]
          },
          empresas_sucurales_id:empresas_sucurales_id
        },
      });

      return result.length > 0 ? result : null;
      
    } catch (error) {
      throw error
    }
  }

  static async createDate(date, empresas_sucurales_id){
    try {
      const result = await DateUtility.create({
        Date: date,
        empresas_sucurales_id: empresas_sucurales_id
      });
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = DatesUtilityServices