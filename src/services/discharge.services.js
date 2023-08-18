const Discharge = require('../models/discharge.model')

class DischargeService {
  static async dischargeCreted(concept, total, branch_id, id){
    try {
      const result = await Discharge.create({
        concept: concept,
        total: total,
        branch_id: branch_id, 
        date_id:id
      })
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = DischargeService