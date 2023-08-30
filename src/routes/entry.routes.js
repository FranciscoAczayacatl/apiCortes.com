const {Router} = require('express');
const {
  createEntry,
  getEntry
} = require('../controllers/entry.controller');

const router = Router();

//router.Method // get, post, put, delete

router.post('/create', createEntry);
router.post('/getEntry', getEntry)



module.exports = router;