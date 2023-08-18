const {Router} = require('express');
const {
  createDischarge
} = require('../controllers/discharges.controller.js');

const router = Router();

//router.Method // get, post, put, delete

router.post('/', createDischarge);



module.exports = router;