const {Router} = require('express');
const {
  createCompany,
  getCompany,
  getCompanyById
} = require('../controllers/company.controller');
const router = Router();

//router.Method // get, post, put, delete

router.post('/',createCompany);
router.get('/', getCompany);
router.post('/:id', getCompanyById);



module.exports = router;