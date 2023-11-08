const {Router} = require('express');
const {
createUtility,
getUtilityByDatesDay,
getByIdUtilityAndBranchesDay,
getByIdUtilityAndBranchesDayTablesDetail
} = require('../controllers/utility.controller');
const router = Router();

//router.Method // get, post, put, delete

router.post('/', createUtility);
router.post('/getall',getUtilityByDatesDay);
router.post('/getbyid', getByIdUtilityAndBranchesDay);
router.post('/getbyidtablesdetail', getByIdUtilityAndBranchesDayTablesDetail);




module.exports = router;