const CategoriesService = require("../services/categories.service");

const getAll = async(req, res)=>{
  try {
    const result = await CategoriesService.getAllCategories() ;
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
    const {id, name} = req.body;
    const result = await CategoriesService.createCategorie(id, name);
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
    const result = await CategoriesService.getAllCategorieBC(id);
    res.status(200).json({
      result: result
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
  getAllByIdBarnchesCompany
}