const {Router} = require('express');

const {
  getFunctions,
  createFunctions,
  getFunctionsById,
} = require('../controllers/funtions.controller');

const router = Router();

router.post('/get', getFunctions );
router.post('/create', createFunctions);
router.post('/getbyid/', getFunctionsById);

module.exports = router;

