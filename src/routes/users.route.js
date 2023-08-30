const {Router} = require('express');
const {
  getUsers,
  deleteUser
} = require('../controllers/user.controller');

const router = Router();

//router.Method // get, post, put, delete

router.get('/', getUsers);
router.delete('/:id',deleteUser);



module.exports = router;