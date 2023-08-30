const {Router} = require('express');
const {
  createBranch
} = require('../controllers/branch.controller');
const router = Router();

//router.Method // get, post, put, delete

router.post('/',createBranch);



module.exports = router;