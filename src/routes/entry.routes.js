const {Router} = require('express');
const {
  createEntry
} = require('../controllers/entry.controller');

const router = Router();

//router.Method // get, post, put, delete

router.post('/create', createEntry);



module.exports = router;