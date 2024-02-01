const {Router} = require('express');
const { getAll, create,getAllByIdBarnchesCompany, updateStock } = require('../controllers/products.controllers');

const router = Router();

router.get('/get/all',getAll );
router.post('/create',create);
router.post('/getby/id/cp/:id', getAllByIdBarnchesCompany);
router.post('/update/stock/:id', updateStock);

module.exports = router;