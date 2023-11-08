
const Cost = require('../models/cost.model');

class ThroughServices {
  static async create(ordinarios, provicion, tb, gastos){
    try {
      const result = await Cost.create({
        ordinarios: ordinarios,
        provicion: provicion,
        tb: tb,
        gastos: gastos
      });
      return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = ThroughServices;