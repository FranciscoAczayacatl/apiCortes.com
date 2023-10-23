const {Router} = require('express');
const {
  createConcept,
  getConcept,
  getConceptByID,
} = require('../controllers/concept.controller');
const router = Router();

//router.Method // get, post, put, delete

router.post('/create',createConcept);
router.post('/', getConcept);
router.post('/:id',getConceptByID);



module.exports = router;