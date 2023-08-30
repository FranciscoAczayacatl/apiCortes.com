const {Router} = require('express');
const {
  getTotals,
  getTotalById
} = require('../controllers/totals.controller');

const router = Router();

//router.Method // get, post, put, delete

router.post('/', getTotals);
router.post('/table', getTotalById);



module.exports = router;