const {Router} = require('express');
const {
  createDepartament,
  getDepartaments,
  getDepartamentById
} = require('../controllers/departaments.controller');
const router = Router();

//router.Method // get, post, put, delete

router.post('/',createDepartament);
router.post('/get', getDepartaments);
router.post('/:id', getDepartamentById);



module.exports = router;