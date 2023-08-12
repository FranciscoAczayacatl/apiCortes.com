const Totals = require('../models/totals.model');

class TotalService {
  static async cretedTotal(total, id, branch_id ){
    try {
      const result = Totals.create({
        entry: total,
        discharge: 0,
        total: total,
        result: 'Utilidad',
        date_id: id,
        branch_id: branch_id
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async getTotalByDate_id(date_id,branch_id){
    try {
      const result = await Totals.findAll({
        where:{
          date_id:date_id,
          branch_id:branch_id
        }
      })
      return result
    } catch (error) {
      throw error
    }
  }
  static async Update(totalId,totalentry, totalDischarge,totalUpdate,totalResult){
    try {
      const result = await Totals.update({entry: totalentry,discharge: totalDischarge,total: totalUpdate,result: totalResult},{
        where:{
          id:totalId
        }
      })
      return result
    } catch (error) {
      throw error
    }
  }
}


module.exports = TotalService