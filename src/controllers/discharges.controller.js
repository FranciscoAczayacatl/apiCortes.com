const DatesService = require("../services/dates.service");
const DischargeService = require("../services/discharge.services");
const TotalService = require("../services/total.service");

const createDischarge = async(req, res )=>{
  try {
    const {empresas_sucurales_id, total, user_id, clasificasion_id ,departamentos_id, concepto_id, observations, centro_costo_id} = req.body;
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    const todayWithoutTime = new Date(todayYear, todayMonth, todayDay);
    const resultDates = await DatesService.dateVerify(todayWithoutTime, empresas_sucurales_id);
    if (resultDates !== null){
      const getTotals= await TotalService.getTotalByDate_id(resultDates[0].id, empresas_sucurales_id)
      const totalId = getTotals[0].id
      const totalInTable =getTotals[0].total;
      let totalDischarge = Number(getTotals[0].discharge);
      let totalEntry = Number(getTotals[0].entry);
      let newDis = total - totalDischarge
      totalDischarge = newDis
      let totalUpdate = totalEntry - newDis
      let totalResult = ''
      if (totalUpdate>0) {
        totalResult = 'Utilidad'
      } else {
        totalResult = 'Perdida'
      }
      const createdEntry = await DischargeService.DischargeCreted(empresas_sucurales_id, total, user_id, clasificasion_id ,departamentos_id, concepto_id, observations, centro_costo_id, resultDates[0].id);
      const updateTotal= await TotalService.UpdateDischarge(totalId, totalEntry, newDis,totalUpdate,totalResult)
        res.status(200).json({
          result: 'ok',
          message: 'total actualizado',
          total:updateTotal
        })
    }else{
      const dateCreate = new Date(todayWithoutTime);
      const creatingDate = await DatesService.createDate( dateCreate, empresas_sucurales_id);
      const {id} = creatingDate
      const fecha_id = id;
      const createdEntry = await DischargeService.DischargeCreted(empresas_sucurales_id, total, user_id, clasificasion_id ,departamentos_id, concepto_id, observations, centro_costo_id, fecha_id);
      const createTotal = await TotalService.cretedTotalDischarge(total, fecha_id, empresas_sucurales_id );
      res.status(201).json({
        result: 'ok',
        massage: createTotal
      })
    }
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getDischargers = async(req, res)=>{
  try {
    const {todayYear,todayMonth,todayDay,empresas_sucurales_id} = req.body;
    const todayWithoutTime = new Date(todayYear, todayMonth-1, todayDay);
    const result = await DischargeService.getDischargeByDateAndBranch(todayWithoutTime, empresas_sucurales_id)
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

module.exports = {
  createDischarge,
  getDischargers
}