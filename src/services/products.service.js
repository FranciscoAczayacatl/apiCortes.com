const { where } = require("sequelize");
const Products  = require("../models/products.model");
const Inventory = require("../models/inventory.model");
const Categories = require("../models/categories.model");
const Suppliers = require("../models/suppliers.model");

class ProductService {
  static async getAllProduct(){
    try {
      const result = await Products.findAll();
      return result
    } catch (error) {
      throw error
    }
  }

  static async createProduct(data) {
    try {
      const result = await Products.create(data)
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getAllProductBC(id){
    try {
      const result = await Products.findAll({
        where:{
          empresas_sucursales_id: id
        },
        include:[
          {
            model:Categories,
            as:'categoria',
            attributes:['nombre']
          },
          {
            model:Suppliers,
            as:'proveedor',
            attributes:['nombre_completo']
          }
        ]
      })
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getProductId(id){
    try {
      const result = await Products.findAll({
        where:{
          id
        },
        attributes:['stock'],
        include:{
          model:Inventory,
          as:'producto',
          attributes:['stock','compras'],
        }
      });
      return result;
    } catch (error) {
      throw error
    }
  }

  static async updateStockProduct(id, stock){
    try {
      const result = await Products.update({stock},
        {
          where:{
            id:id
          }
        });
        return result
    } catch (error) {
      throw error
    }
  }

  static async updateMenusStock(id, stock){
    try {
      const result = await Products.update({stock},
        {
          where:{
            id:id
          }
        });
        return result
    } catch (error) {
      throw error
    }
  }
}

module.exports = ProductService;