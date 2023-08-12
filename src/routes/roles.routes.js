const {Router} = require('express');
const {
  getRole
} = require('../controllers/roles.controller');
const authMiddleware = require('../middlewares/auth.middleware')
const router = Router();

//router.Method // get, post, put, delete

router.post('/',authMiddleware, getRole);



module.exports = router;