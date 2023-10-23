const {Router} = require('express');
const {
  createCostCenter,
  getCostCenter,
  getCostCenterByID,
} = require('../controllers/costCenter.controlle');
const router = Router();

//router.Method // get, post, put, delete

router.post('/',createCostCenter);
router.post('/getcostcenter', getCostCenter);
router.post('/:id',getCostCenterByID);



module.exports = router;