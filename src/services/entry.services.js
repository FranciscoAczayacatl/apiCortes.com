const Entry = require('../models/entry.model')

class EntryService {
  static async entryCreted(concept, total, branch_id, id){
    try {
      const result = await Entry.create({
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

module.exports = EntryService