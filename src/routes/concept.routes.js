const {Router} = require('express');
const {
  createConcept,
  getConcept
} = require('../controllers/concept.controller');
const router = Router();

//router.Method // get, post, put, delete

router.post('/create',createConcept);
router.get('/', getConcept)



module.exports = router;