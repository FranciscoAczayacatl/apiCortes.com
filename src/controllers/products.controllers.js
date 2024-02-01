const InventoryService = require("../services/inventory.service");
const ProductService = require("../services/products.service");

const getAll = async(req, res)=>{
  try {
    const result = await ProductService.getAllProduct() ;
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
    const data = req.body;

    const result = await ProductService.createProduct(data);
    const {stock, id, empresas_sucursales_id} = result
    const ventas = 0;
    const compras = stock;
    const productos_id =id;
    const dataInventory={
      ventas,
      compras,
      stock,
      productos_id,
      empresas_sucursales_id,

    }
    const inventory = await InventoryService.createInventory(dataInventory);
    res.status(201).json({
      message: 'ok',
    })
  } catch (error) {
    
    res.status(400).json({
      error:error.messaje
    })
  }
}

const getAllByIdBarnchesCompany = async(req, res) =>{
  try {
    const {id} = req.params;
    const result = await ProductService.getAllProductBC(id);
    res.status(200).json({
      result: result
    })
  } catch (error) {
   
    res.status(400).json({
      error:error.messaje
    })
  }
}

const updateStock = async(req, res) => {
  try {
    const {id} = req.params;
    const {stock} = req.body;
    const productStocks = await ProductService.getProductId(id);
    const oldStockProduct = productStocks[0].dataValues.stock
    const oldStockinventory = productStocks[0].dataValues.producto[0].dataValues.stock
    const oldComprasinventory = productStocks[0].dataValues.producto[0].dataValues.compras
    const newStockProduct = stock + oldStockProduct;
    const newStockInventory = stock + oldStockinventory;
    const newComprasInventory = stock + oldComprasinventory;
    const updateProduct = await ProductService.updateStockProduct(id, newStockProduct);
    const updateInventory = await InventoryService.updateStockInventory(id, newStockInventory, newComprasInventory)


    res.status(200).json({
      
    result: [updateInventory, updateProduct]
    })
  } catch (error) {
    res.status(400).json({
      error:error.messaje
    })
  }
}

module.exports ={
  getAll, 
  create,
  getAllByIdBarnchesCompany,
  updateStock
}