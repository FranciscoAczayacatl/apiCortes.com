const Totals = require('../models/totals.model');

class TotalService {
  static async cretedTotalEntry(total, id, branch_id ){
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

  static async cretedTotalDischarge(total, id, branch_id ){
    try {
      const result = Totals.create({
        entry: 0,
        discharge: -total,
        total: total,
        result: 'Perdida',
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

  static async findTotalBydate(date_id){
    try {
      const result = await Totals.findAll({
        where:{
          date_id:date_id,
        }
      })
      return result
    } catch (error) {
      throw error
    }
  }
  static async UpdateEntry(totalId,totalentry, totalDischarge,totalUpdate,totalResult){
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

  static async UpdateDischarge(totalId,totalentry, totalDischarge,totalUpdate,totalResult){
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

  static async getTotalByBranchId(branch_id){
    try {
      const result= await Totals.findAll({
        where:{
          branch_id:branch_id
        }
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async getTotalById(id){
    try {
      const result = await Totals.findByPk(id)
      return result
    } catch (error) {
      throw error
    }
  }

  
}


module.exports = TotalService