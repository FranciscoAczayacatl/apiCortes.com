const {Router} = require('express');
const {
  getTotals
} = require('../controllers/totals.controller');

const router = Router();

//router.Method // get, post, put, delete

router.post('/', getTotals);



module.exports = router;