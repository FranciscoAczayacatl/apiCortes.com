const {Router} = require('express');
const {
  createDischarge,
  getDischargers
} = require('../controllers/discharges.controller.js');

const router = Router();

//router.Method // get, post, put, delete

router.post('/', createDischarge);
router.post('/getDischargers', getDischargers)


module.exports = router;