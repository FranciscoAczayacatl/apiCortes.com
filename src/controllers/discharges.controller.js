const DatesService = require("../services/dates.service");
const DischargeService = require("../services/discharge.services");
const TotalService = require("../services/total.service");

const createDischarge = async(req, res )=>{
  try {
    const {branch_id, concepto, entry} = req.body;
    const total = Number(entry)
    const concept = concepto;
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    const todayWithoutTime = new Date(todayYear, todayMonth, todayDay);
    const resultDates = await DatesService.dateVerify(todayWithoutTime);
    if (resultDates!== null){
      const date_idTotals = resultDates.map(result => result.dataValues.id);
      const findTotal = await TotalService.findTotalBydate(date_idTotals[0]);
      const comparator = findTotal.map(result => result.branch_id);
      if (comparator.includes(branch_id)) {
        const getTotals= await TotalService.getTotalByDate_id(date_idTotals[0],branch_id)
        const totalId = getTotals.map(result => result.dataValues.id);
        const totalentry = getTotals.map(result => result.dataValues.entry);
        const totalDischarge = getTotals.map(result => result.dataValues.discharge);
        totalDischarge[0] -= total 
        let totalUpdate=totalentry[0]+totalDischarge[0]
        let totalResult = ''
        if (totalUpdate>0) {
          totalResult = 'Utilidad'
        } else {
          totalResult = 'Perdida'
        }

        const updateTotal= await TotalService.UpdateDischarge(totalId[0],totalentry[0], totalDischarge[0],totalUpdate,totalResult)
        res.status(200).json({
          result: 'ok',
          message: 'total actualizado'
        })

      } else {
        const id = resultDates.map(result => result.dataValues.id);
        console.log(id);
        const createdEntry = await DischargeService.dischargeCreted(concept, total, branch_id, id[0]);
        const createTotal = await TotalService.cretedTotalDischarge(total, id, branch_id );
        res.status(201).json({
          result: 'ok',
          massage: 'total creado'
        })
      }
      
    }else{
      
      const dateCreate = new Date(todayWithoutTime);
      const creatingDate = await DatesService.createDate( dateCreate);
      const {id} = creatingDate
      const createdEntry = await DischargeService.dischargeCreted(concept, total, branch_id, id);
      const createTotal = await TotalService.cretedTotalDischarge(total, id, branch_id );
      res.status(201).json({
        result: 'ok',
        massage: 'total creado'
      })
    }
  } catch (error) {
    res.status(400).json({
      error: error.mesage
    })
  }
}

module.exports = {
  createDischarge
}