const {Router} = require('express');
const {
  getRole,
  createRole
} = require('../controllers/roles.controller');
const authMiddleware = require('../middlewares/auth.middleware')
const router = Router();

//router.Method // get, post, put, delete

router.post('/',authMiddleware, getRole);
router.post('/createroll',createRole)


module.exports = router;