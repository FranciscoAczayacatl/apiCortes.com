const {Router} = require('express');
const {
  getRole,
  createRole,
  getRoleID
} = require('../controllers/roles.controller');
const router = Router();

//router.Method // get, post, put, delete

router.post('/createroll',createRole);
router.get('/', getRole);
router.post('/:id', getRoleID);




module.exports = router;