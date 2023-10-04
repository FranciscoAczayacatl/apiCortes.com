

const DatesService = require("../services/dates.service");
const EntryService = require("../services/entry.services");
const TotalService = require("../services/total.service");

const createEntry = async(req, res)=>{
  try {
    const {branch_id, entry, user_id, classification,deapatarment,concept,observaciones,costCenter} = req.body;
    const total = Number(entry);
    const concept_id = Number(concept)
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    const todayWithoutTime = new Date(todayYear, todayMonth, todayDay);
    const resultDates = await DatesService.dateVerify(todayWithoutTime);
    if (resultDates !== null){
      
      const date_idTotals = resultDates.map(result => result.dataValues.id);
      const findTotal = await TotalService.findTotalBydate(date_idTotals[0]);
      const comparator = findTotal.map(result => result.branch_id);

      if (comparator.includes(branch_id)) {
        
        const getTotals= await TotalService.getTotalByDate_id(date_idTotals[0], branch_id)
        const totalId = getTotals.map(result => result.dataValues.id);
        const totalentry = getTotals.map(result => result.dataValues.entry);
        const totalDischarge = getTotals.map(result => result.dataValues.discharge);
        totalentry[0] += total 
        let totalUpdate = totalentry[0] + totalDischarge[0]
        let totalResult = ''
        console.log(totalUpdate);
        if (totalUpdate>0) {
          totalResult = 'Utilidad'
        } else {
          totalResult = 'Perdida'
        }
        const id =date_idTotals[0];
        const createdEntry = await EntryService.entryCreted(classification, total, branch_id, id, user_id,deapatarment,concept_id,observaciones,costCenter);
        const updateTotal= await TotalService.UpdateEntry(totalId[0],totalentry[0], totalDischarge[0],totalUpdate,totalResult)
        res.status(200).json({
          result: 'ok',
          message: 'total actualizado',
          total:updateTotal
        })

      } else {
        const id = resultDates.map(result => result.dataValues.id);
        console.log(id);
        const createdEntry = await EntryService.entryCreted(classification, total, branch_id, id[0], user_id, deapatarment,concept_id,observaciones,costCenter);
        const createTotal = await TotalService.cretedTotalEntry(total, id, branch_id );
        res.status(201).json({
          result: 'ok',
          massage: 'total creado'
        })
      }
      
    }else{
      
      const dateCreate = new Date(todayWithoutTime);
      const creatingDate = await DatesService.createDate( dateCreate);
      const {id} = creatingDate
      const createdEntry = await EntryService.entryCreted(classification, total, branch_id, id, user_id,deapatarment,concept_id,observaciones,costCenter);
      const createTotal = await TotalService.cretedTotalEntry(total, id, branch_id );
      res.status(201).json({
        result: 'ok',
        massage: 'total creado'
      })
    }
    
  } catch (error) {

    res.status(400).json(
      {
        error: error.message

      }
    )
  }
}

const getEntry = async (req, res) =>{
  try {
    const {todayYear,todayMonth,todayDay,branch} = req.body;
    const todayWithoutTime = new Date(todayYear, todayMonth, todayDay);
    const result = await EntryService.getEntryByDateAndBranch(todayWithoutTime, branch)
    res.status(200).json(
      {
      result:result
      })
  } catch (error) {
    res.status(400).json(
      {
        error: error.message

      }
    )
  }
}
module.exports ={
  createEntry,
  getEntry
}