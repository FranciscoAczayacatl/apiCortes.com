const InventoryService = require("../services/inventory.service");

const getAll = async(req, res)=>{
  try {
    const result = await InventoryService.getAllInventory() ;
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
    const result = await InventoryService.createInventory(data);
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
    const result = await InventoryService.getAllInventoryBC(id);
    res.status(200).json({
      result: result
    })
  } catch (error) {

    res.status(400).json({
      error:error.messaje
    })
  }
}

// const updateStock = async(req, res) =>{
//   try {
//     const {updateStock, }= req.body
//     const inventary = await InventoryService.getInventaryByProductID(productos_id); 
//     console.log(inventary);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({
//       error:error.messaje
//     })
//   }
// }
module.exports ={
  getAll, 
  create,
  getAllByIdBarnchesCompany,

}