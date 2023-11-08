const CostSalesService = require("../services/costSales.services");
const CostUtilityService = require("../services/costUtility.services");
const DatesUtilityServices = require("../services/datesUtility.services");
// const SaleUtilityService = require("../services/saleUtility.services");
const ThroughServices = require("../services/through.services");
const UtilityService = require("../services/utility.services");

const createUtility = async(req, res)=>{
  try {
    const {ordinarios, provicion, tb, venta, costo, empresas_sucursales_id, user_id} = req.body;
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    const todayWithoutTime = new Date(todayYear, todayMonth, todayDay);
    const resultDatesUtility = await DatesUtilityServices.dateVerify(todayWithoutTime, empresas_sucursales_id)

    if(resultDatesUtility !== null){

      const fechas_utilidad_id = resultDatesUtility[0].id;

      const gastos = Number(ordinarios) + Number(provicion) + Number(tb);
      const createThrough = await ThroughServices.create(Number(ordinarios),Number(provicion), Number(tb), gastos);
      const gastos_id = createThrough.id;

      const trougput = Number(venta) - Number(costo)
      const createSalesCosts = await CostUtilityService.create(Number(venta), Number(costo), trougput, empresas_sucursales_id, user_id, gastos_id)
      const venta_costos_id = createSalesCosts.id;


      const getUtility = await UtilityService.getUtilityForDatesAndCompanyBranchId(fechas_utilidad_id, empresas_sucursales_id);

      const oldGastosUtility = getUtility[0].gastos;
      const oldTrougputUtility = getUtility[0].ventas;
      const oldUtility = getUtility[0].utilidad;
      
      const newgastos = gastos + oldGastosUtility;
      const newTrougput = trougput + oldTrougputUtility;
      const newUtility = newTrougput - newgastos;

      
      const updateUtility = await UtilityService.update(getUtility[0].id, newTrougput, newgastos, newUtility);
      const utilidad_id = getUtility[0].id; 
      const createCostSales = await CostSalesService.create(venta_costos_id, utilidad_id, fechas_utilidad_id);
      res.status(200).json({
        resutl: 'ok', 
        data: createCostSales
      })


    }else{

      const createDatesUtility = await DatesUtilityServices.createDate(todayWithoutTime,empresas_sucursales_id);
      const fechas_utilidad_id = createDatesUtility.id;

      const gastos = Number(ordinarios) + Number(provicion) + Number(tb);
      const createThrough = await ThroughServices.create(Number(ordinarios),Number(provicion), Number(tb), gastos);
      const gastos_id = createThrough.id;

      const trougput = Number(venta) - Number(costo)
      const createSalesCosts = await CostUtilityService.create(Number(venta), Number(costo), trougput, empresas_sucursales_id, user_id, gastos_id)
      const venta_costos_id = createSalesCosts.id;



      const utilidad= trougput - gastos
      const createUtility = await UtilityService.create(trougput, gastos, utilidad, fechas_utilidad_id, empresas_sucursales_id);
      const utilidad_dia_id = createUtility.id

      const createCostSales = await CostSalesService.create(venta_costos_id,utilidad_dia_id, fechas_utilidad_id);

      res.status(201).json({
        created: 'ok entro a creacion',
        result: createCostSales
      })
    }
  } catch (error) {

    res.status(400).json({
      error: error.message
    })
  }
}

const getUtilityByDatesDay = async(req, res) =>{
  try {
    const {empresas_sucursales_id} = req.body;
    const result = await UtilityService.getUtilityDay(empresas_sucursales_id);
    res.status(200).json({
      result: result,
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getByIdUtilityAndBranchesDay = async( req, res) =>{
  try {
    const {fechas_utilidad_id, empresas_sucursales_id}  = req.body
    const result = await UtilityService.getUtilityIdDay(fechas_utilidad_id, empresas_sucursales_id)
    const id = result[0].id;
    const fechasUtilidadId= result[0].fechas_utilidad_id;
    const empresasSucuralesId = result[0].empresas_sucurales_id;
    const createdAt = result[0].createdAt;
    const trougput = result[0].ventas;
    const gastos = result[0].gastos;
    const utilidad = result[0].utilidad;
    const d_utildad_costo_v = result[0].d_utildad_costo_v;
    const sumaTotales = d_utildad_costo_v.reduce((acumulador, objeto) => {
      acumulador.ventas += objeto.costo_utilidad_dia.ventas;
      acumulador.costos += objeto.costo_utilidad_dia.costos;
      acumulador.trougput += objeto.costo_utilidad_dia.trougput;
      acumulador.ordinarios += objeto.costo_utilidad_dia.costo_utilida_pivote.ordinarios;
      acumulador.provicion += objeto.costo_utilidad_dia.costo_utilida_pivote.provicion;
      acumulador.tb += objeto.costo_utilidad_dia.costo_utilida_pivote.tb;
      acumulador.gastos += objeto.costo_utilidad_dia.costo_utilida_pivote.gastos;
      return acumulador;
  }, {
      ventas: 0,
      costos: 0,
      trougput: 0,
      ordinarios: 0,
      provicion: 0,
      tb: 0,
      gastos: 0
  });
    res.status(200).json({
      id:id,
      fechasUtilidadId:fechasUtilidadId,
      empresasSucuralesId:empresasSucuralesId,
      createdAt:createdAt,
      trougput:trougput,
      gastos:gastos,
      utilidad :utilidad,
      sumaTotalesVentas:sumaTotales.ventas,
      sumaTotalesCostos:sumaTotales.costos,
      sumaTotalesTrougput:sumaTotales.trougput,
      sumaTotalesOrdinarios:sumaTotales.ordinarios,
      sumaTotalesProvicion:sumaTotales.provicion,
      sumaTotalesTb:sumaTotales.tb,
      sumaTotalesGastos:sumaTotales.gastos,

    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

const getByIdUtilityAndBranchesDayTablesDetail = async(req, res) =>{
  try {
    const {fechas_utilidad_id, empresas_sucursales_id}  = req.body
    const result = await UtilityService.getUtilityIdDayTableDetail(fechas_utilidad_id, empresas_sucursales_id)
    const d_utildad_costo_v = result[0].d_utildad_costo_v;
    res.status(200).json({
      result : d_utildad_costo_v

    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}
module.exports = {
  createUtility,
  getUtilityByDatesDay,
  getByIdUtilityAndBranchesDay,
  getByIdUtilityAndBranchesDayTablesDetail
}