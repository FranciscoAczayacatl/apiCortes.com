const InventoryService = require("../services/inventory.service");
const OutstandingDebtsService = require("../services/outstandingDebts.service");
const ProductService = require("../services/products.service");
const SalesServices = require("../services/sales.service");
const SalesMethodPaymentsService = require("../services/salesMethodPayments.service");
const SalesProductsServices = require("../services/salesProducts.service");


const getAll = async(req, res)=>{
  try {
    const result = await SalesServices.getAllSales() ;
    res.status(200).json({
      result: result
    })
  } catch (error) {
    res.status(400).json({
      error:error.messaje
    })
  }
}

const create = async(req, res) =>{
  try {

    const {productos,total,empresas_sucursales_id,user_id,pagado,clientes_id,metodo_pago_id, referencia} = req.body;
    if(pagado){

      const salesResult = await SalesServices.createSales(total,empresas_sucursales_id,user_id,pagado,clientes_id);
      const salesID = salesResult.id


      for (let i = 0; i < productos.length; i++) {
        const idProducto = productos[i].id;
        const unidades = productos[i].unidades;
        const getInventaryByProductId = await InventoryService.getInventoryByProductId(idProducto);
        console.log(unidades);
          const newStockInventario =  getInventaryByProductId[0].stock - unidades;
          const newVentasInventario = getInventaryByProductId[0].ventas + unidades;
          const newComprasInventario = getInventaryByProductId[0].compras - unidades ;
          const newStockProduct = getInventaryByProductId[0].stock - unidades;
          
          const salesOne = await SalesProductsServices.create(idProducto,empresas_sucursales_id,salesID);
          const inventroyStockAndSales =  await InventoryService.menusUpdateStockInventory(getInventaryByProductId[0].id, newStockInventario, newVentasInventario, newComprasInventario );
          const updateProductStock = await ProductService.updateMenusStock(idProducto,newStockProduct)

      }
      
      const resultSalesMethodPayments = await SalesMethodPaymentsService.created(salesID ,empresas_sucursales_id,metodo_pago_id,referencia) 
      res.status(200).json({
        state: 'ok',
       result: salesResult
      })
    }else{
      
      const salesResult = await SalesServices.createSales(total,empresas_sucursales_id,user_id,pagado,clientes_id);
      const salesID = salesResult.id

      for (let i = 0; i < productos.length; i++) {
        const idProducto = productos[i].id;
        const unidades = productos[i].unidades;
        const getInventaryByProductId = await InventoryService.getInventoryByProductId(idProducto);
        console.log(unidades);
          const newStockInventario =  getInventaryByProductId[0].stock - unidades;
          const newVentasInventario = getInventaryByProductId[0].ventas + unidades;
          const newComprasInventario = getInventaryByProductId[0].compras - unidades ;
          const newStockProduct = getInventaryByProductId[0].stock - unidades;
          
          const salesOne = await SalesProductsServices.create(idProducto,empresas_sucursales_id,salesID);
          const inventroyStockAndSales =  await InventoryService.menusUpdateStockInventory(getInventaryByProductId[0].id, newStockInventario, newVentasInventario, newComprasInventario );
          const updateProductStock = await ProductService.updateMenusStock(idProducto,newStockProduct)

      }
      
      const resultSalesMethodPayments = await SalesMethodPaymentsService.created(salesID ,empresas_sucursales_id,metodo_pago_id,referencia);
      const resultOutstandingDebts = await OutstandingDebtsService.created(total,empresas_sucursales_id,salesID,pagado,clientes_id);
      res.status(200).json({
        state: 'ok',
       result: salesResult
      })
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error:error.messaje
    })
  }
}

const getAllByIdBarnchesCompany = async(req, res) =>{
  try {
    const {id} = req.params;
    const result = await SalesServices.getAllSalesBC(id);

    res.status(200).json({
      result: result
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error:error.messaje
    })
  }
}

module.exports ={
  getAll, 
  create,
  getAllByIdBarnchesCompany
}