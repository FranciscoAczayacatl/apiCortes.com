const DatesService = require("../services/dates.service");
const TotalService = require("../services/total.service");
const EntryService = require("../services/entry.services");

const createEntry = async(req, res)=>{
  try {

    const {branch_id, concept,total} = req.body;
    
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    const todayWithoutTime = new Date(todayYear, todayMonth, todayDay);
    const resultDates = await DatesService.dateVerify(todayWithoutTime);
    console.log(resultDates);
    
    if (resultDates!== null){
      console.log(resultDates?.dates);
      const date_idTotals = resultDates.map(result => result.dataValues.id);
    
      const getTotals= await TotalService.getTotalByDate_id(date_idTotals[0],branch_id)
      const totalId = getTotals.map(result => result.dataValues.id);
      const totalentry = getTotals.map(result => result.dataValues.entry);
      const totalDischarge = getTotals.map(result => result.dataValues.discharge);
      totalentry[0] += total 
      let totalUpdate=totalentry[0]-totalDischarge[0]
      let totalResult = ''
      if (totalUpdate>0) {
        totalResult = 'Utilidad'
      } else {
        totalResult = 'Perdida'
      }

      const updateTotal= await TotalService.Update(totalId[0],totalentry[0], totalDischarge[0],totalUpdate,totalResult)
      res.status(200).json({
        ok: 'true',
        result: updateTotal
      })
    }else{
      
      const dateCreate = new Date(todayWithoutTime);
      const creatingDate = await DatesService.createDate( dateCreate);
      const {id} = creatingDate
      const createdEntry = await EntryService.entryCreted(concept, total, branch_id, id);
      const createTotal = await TotalService.cretedTotal(total, id, branch_id );
      res.status(201).json({
        entry: createdEntry
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

module.exports ={
  createEntry
}