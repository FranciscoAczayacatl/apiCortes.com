//registro 
//login
const {Router} = require('express');
const {
  register,
  userLogin,
  logout,
} = require('../controllers/auth.controller');

const router = Router();

//router.Method // get, post, put, delete

router.post('/register', register);
router.post('/login', userLogin);
router.post('/logout', logout);


module.exports = router;