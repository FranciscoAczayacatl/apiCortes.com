const {Router} = require('express');
const {
  getUsers,
  deleteUser,
  getUser,
  activateUser
} = require('../controllers/user.controller');

const router = Router();

//router.Method // get, post, put, delete

router.post('/', getUsers);
router.delete('/:id',deleteUser);
router.post('/getuser/:id', getUser);
router.post('/activate/:id',activateUser);



module.exports = router;