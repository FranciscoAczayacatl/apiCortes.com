const { Sequelize } = require("sequelize");
const Sales = require("../models/sales.model");



class SalesServices {
  static async getAllSales(){
    try {
      const result = await Sales.findAll();
      return result
    } catch (error) {
      throw error
    }
  }

  static async createSales(total,empresas_sucursales_id,user_id,pagado,clientes_id) {
    try {
      const result = await Sales.create({
        total:total,
        empresas_sucursales_id:empresas_sucursales_id,
        user_id:user_id,
        pagado: pagado,
        clientes_id: clientes_id
      })
      return result;
    } catch (error) {
      throw error
    }
  }

  static async getAllSalesBC(id){
    try {
      const result = await Sales.findAll({
        attributes: [
          [Sequelize.fn('DATE', Sequelize.col('createdAt')), 'fecha'], 
          [Sequelize.fn('SUM', Sequelize.col('total')), 'total_ventas']
        ],
        where: {
          empresas_sucursales_id: id,
        },
        group: [Sequelize.fn('DATE', Sequelize.col('createdAt'))],
      });
      return result;
    } catch (error) {
      throw error
    }
  }


}

module.exports = SalesServices;