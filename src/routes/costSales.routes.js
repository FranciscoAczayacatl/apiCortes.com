const {Router} = require('express');
const {
getSalesByDateAndComapanyBranches
} = require('../controllers/costSales.controller');
const router = Router();

//router.Method // get, post, put, delete

router.post('/', getSalesByDateAndComapanyBranches);





module.exports = router;