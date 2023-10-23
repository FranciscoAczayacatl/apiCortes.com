const {Router} = require('express');
const {
  createclassification,
  getclassification,
  getclassificationById
} = require('../controllers/classification.controller');
const router = Router();

//router.Method // get, post, put, delete

router.post('/',createclassification);
router.post('/get', getclassification);
router.post('/:id', getclassificationById);



module.exports = router;