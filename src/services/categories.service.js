const Categories = require("../models/categories.model");

class CategoriesService {
  static async getAllCategories(){
    try {
      const result = await Categories.findAll();
      return result
    } catch (error) {
      throw error
    }
  }

  static async createCategorie(id, name) {
    try {
      const result = await Categories.create(
        {
          nombre: name,
          empresas_sucursales_id: id
        }
      )
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getAllCategorieBC(id){
    try {
      const result = await Categories.findAll({
        where:{
          empresas_sucursales_id: id
        }
      })
      return result;
    } catch (error) {
      throw error
    }
  }
}

module.exports = CategoriesService;