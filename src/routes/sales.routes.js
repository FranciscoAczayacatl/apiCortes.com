const {Router} = require('express');
const { getAll, create,getAllByIdBarnchesCompany } = require('../controllers/sales.controller');

const router = Router();

router.get('/get/all',getAll );
router.post('/create',create);
router.post('/getby/id/cp/:id', getAllByIdBarnchesCompany);

module.exports = router;