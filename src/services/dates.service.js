const { Op } = require('sequelize');
const Dates = require('../models/dates.model')
class DatesService {

  static async dateVerify(date,empresas_sucurales_id){
    try {
  
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0); 
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      const result = await Dates.findAll({
        where: {
          fecha: {
            [Op.between]: [startOfDay, endOfDay]
          },
          empresas_sucurales_id:Number(empresas_sucurales_id)
        },
      });

      return result.length > 0 ? result : null;
      
    } catch (error) {
      throw error
    }
  }

  static async createDate(dateCreate,empresas_sucurales_id){
    try {
      const result = await Dates.create({
        fecha:dateCreate,
        empresas_sucurales_id:Number(empresas_sucurales_id)
      });
      return result
    } catch (error) {
      throw error
    }
  }

}

module.exports = DatesService