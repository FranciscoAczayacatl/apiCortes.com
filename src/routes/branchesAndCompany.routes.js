const {Router} = require('express');
const {
  createBranchesAndCompanies,
  getBranchesAndCompanies,
  getBranchesAndCompaniesById
} = require('../controllers/branchesAndCompany.controller');
const router = Router();

//router.Method // get, post, put, delete

router.post('/',createBranchesAndCompanies);
router.get('/', getBranchesAndCompanies);
router.post('/:id', getBranchesAndCompaniesById);



module.exports = router;