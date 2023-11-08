const {Router} = require('express');
const {
  createBranchesAndCompanies,
  getBranchesAndCompanies,
  getBranchesAndCompaniesById,
  getBranchesAndCompaniesByCompany
} = require('../controllers/branchesAndCompany.controller');
const router = Router();

//router.Method // get, post, put, delete

router.post('/',createBranchesAndCompanies);
router.get('/', getBranchesAndCompanies);
router.post('/getbycompaniebybranches', getBranchesAndCompaniesByCompany);
router.post('/:id', getBranchesAndCompaniesById);




module.exports = router;