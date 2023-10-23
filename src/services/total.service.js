const Totals = require('../models/totals.model');

class TotalService {
  static async cretedTotalEntry(total, fecha_id, empresas_sucurales_id){
    try {
      const result = Totals.create({
        entry: total,
        discharge: 0,
        total: total,
        result: 'Utilidad',
        fecha_id: fecha_id,
        empresas_sucurales_id: empresas_sucurales_id
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async cretedTotalDischarge(total, fecha_id, empresas_sucurales_id ){
    try {
      const result = Totals.create({
        entry: 0,
        discharge: -total,
        total: -total,
        result: 'Perdida',
        fecha_id: fecha_id,
        empresas_sucurales_id: empresas_sucurales_id
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async getTotalByDate_id(date, empresas_sucurales_id){
    try {
      const result = await Totals.findAll({
        where:{
          fecha_id: date,
          empresas_sucurales_id: empresas_sucurales_id
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
  static async UpdateEntry(id,totalentry, totalDischarge,totalUpdate,totalResult){
    try {
      const result = await Totals.update({
        entry: totalentry,
        discharge: totalDischarge,
        total: totalUpdate,
        result: totalResult
      },{
        where:{
          id
        }
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async UpdateDischarge(id, totalentry, totalDischarge,totalUpdate,totalResult){
    try {
      const result = await Totals.update({
        entry: totalentry,
        discharge: -totalDischarge,
        total: totalUpdate,
        result: totalResult
      },{
        where:{
          id
        }
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async getTotalByBranchId(empresas_sucurales_id){
    try {
      const result= await Totals.findAll({
        where:{
          empresas_sucurales_id:empresas_sucurales_id
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