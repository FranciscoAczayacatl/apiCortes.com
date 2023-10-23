const {Router} = require('express');
const {
  createBranch,
  getBranches,
  getBranchesByid
} = require('../controllers/branch.controller');
const router = Router();

//router.Method // get, post, put, delete

router.post('/',createBranch);
router.get('/', getBranches);
router.post('/:id', getBranchesByid);



module.exports = router;