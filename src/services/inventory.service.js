const Inventory  = require("../models/inventory.model");
const Products = require("../models/products.model");

class InventoryService {
  static async getAllInventory(){
    try {
      const result = await Inventory.findAll();
      return result
    } catch (error) {
      throw error
    }
  }

  static async createInventory(data) {
    try {
      const result = await Inventory.create(data)
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getInventoryByProductId(idProducto){
    try {
      const result = await Inventory.findAll({
        where:{
          productos_id:idProducto
        }
      });
      return result
    } catch (error) {
      throw error
    }
  }
  static async getAllInventoryBC(id){
    try {
      const result = await Inventory.findAll({
        where:{
          empresas_sucursales_id: id
        },
        include:{
          model:Products,
          as:'producto',
        }
      })
      return result;
    } catch (error) {
      throw error
    }
  }

  static async updateStockInventory(id, stock, compras){
    try {
      const result = await Inventory.update({stock:stock, compras: compras},
        {
          where:{
            productos_id:id
          }
        });
        return result
    } catch (error) {
      throw error
    }
  }

  static async menusUpdateStockInventory(id, newStockInventario, newVentasInventario, newComprasInventario){
    try {
      const stock =newStockInventario;
      const ventas = newVentasInventario
      const compras = newComprasInventario
      const result = await Inventory.update({stock, ventas, compras},
        {
          where:{
            id:id
          }
        });
      
      return result;
    } catch (error) {
      console.log(error.messaje);
      throw error
    }
  }
}

module.exports = InventoryService;