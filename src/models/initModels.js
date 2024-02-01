const Users = require('./users.models');
const Roles = require('./roles.model');
const Branch = require('./branch.model');
const Entry = require('./entry.model');
const Discharge = require('./discharge.model');
const Totals = require('./totals.model');
const Dates = require('./dates.model');
const Concept = require('./concept.model');
const Companies = require('./companies.model');
const Departments = require('./departments.model');
const Clasificasion = require('./classification.model');
const CompaniesAndBranches = require('./companies_branches.model');
const CostCenter = require('./costCenter.model');
const CostUtility = require('./costsUtility.model');
const UtilityDay = require('./utilityDay.model');
const DateUtility = require('./dateUtility.model');
const CostSaleDay = require('./costSaleDay');
const Costs = require('./cost.model');
const Functions = require('./funtions');
const FunctionsUser = require('./funtionsUser');                        
const Categories = require('./categories.model');
const Products = require('./products.model');
const Suppliers = require('./suppliers.model');
const Inventory = require('./inventory.model');
const Customers = require('./customers');
const Sales = require('./sales.model');
const SalesMethodPayments = require('./salesMethodPayments');
const MethodPayment = require('./methodPayment');
const SalesProducts = require('./salesProducts.model');
const OutstandingDebts = require('./outstandingDebts');


const initModels = () =>{

  //usuarios-sucursal
  Users.belongsTo(Branch, {as:'sucursales_id', foreignKey:'sucursal_id'});
  Branch.hasMany(Users,{as:'users', foreignKey:'sucursal_id'});

  //usuarios-roles
  Users.belongsTo(Roles, {as:'rol_id' , foreignKey:'roles_id'});
  Roles.hasMany(Users,{as:'usersroles', foreignKey:'roles_id'});

  //usuarios-compañias
  CompaniesAndBranches.belongsTo(Companies, {as:'companies_branches_com' , foreignKey:'empresa_id'});
  Companies.hasMany(CompaniesAndBranches,{as:'com_companies_branches', foreignKey:'empresa_id'});

  //usuarios-sucursal
  CompaniesAndBranches.belongsTo(Branch, {as:'branch_companie_brances', foreignKey:'sucursal_id'});
  Branch.hasMany(CompaniesAndBranches,{as:'companie_brances_branch', foreignKey:'sucursal_id'});

  //usuarios-compañias
  Users.belongsTo(Companies, {as:'empresas_id' , foreignKey:'empresa_id'});
  Companies.hasMany(Users,{as:'userscompanie', foreignKey:'empresa_id'});

  //usuarios-deparamentos
  Users.belongsTo(Departments, {as:'departamentos_id' , foreignKey:'departamento_id'});
  Departments.hasMany(Users,{as:'usersdepartament', foreignKey:'departamento_id'});

  Users.belongsTo(CompaniesAndBranches, {as:'companies_branches_user_id' , foreignKey:'empresas_sucurales_id'});
  CompaniesAndBranches.hasMany(Users,{as:'user_companies_branches_id', foreignKey:'empresas_sucurales_id'});

  //departaments-breanches_companies
  Departments.belongsTo(CompaniesAndBranches, {as:'companies_branches_departaments_id' , foreignKey:'empresas_sucurales_id'});
  CompaniesAndBranches.hasMany(Departments,{as:'departamnes_companies-branches_id', foreignKey:'empresas_sucurales_id'});

  //clasificasion-compañias_sucursal
  Clasificasion.belongsTo(CompaniesAndBranches, {as:'companiesandbranches' , foreignKey:'empresas_sucurales_id'});
  CompaniesAndBranches.hasMany(Clasificasion,{as:'clasificasioncompaniesandbranches', foreignKey:'empresas_sucurales_id'});

  //concepto-compañias_sucursal
  Concept.belongsTo(CompaniesAndBranches, {as:'conceptcompaniesandbranches' , foreignKey:'empresas_sucurales_id'});
  CompaniesAndBranches.hasMany(Concept,{as:'companiesandbranchesconcept', foreignKey:'empresas_sucurales_id'});

  //centrodecosto-compañias_sucursal
  CostCenter.belongsTo(CompaniesAndBranches, {as:'costcentercompaniesandbranches' , foreignKey:'empresas_sucurales_id'});
  CompaniesAndBranches.hasMany(CostCenter,{as:'companiesandbranchescostcenter', foreignKey:'empresas_sucurales_id'});

  //fechas-compañias_sucursal
  Dates.belongsTo(CompaniesAndBranches, {as:'datescompaniesandbranches' , foreignKey:'empresas_sucurales_id'});
  CompaniesAndBranches.hasMany(Dates,{as:'companiesandbranchesdates', foreignKey:'empresas_sucurales_id'});

  //ingreso-clasificasion
  Entry.belongsTo(Clasificasion,{as:'entryclasificasion', foreignKey:'clasificasion_id'});
  Clasificasion.hasMany(Entry,{as:'clasificasionentry', foreignKey:'clasificasion_id'});

  //ingreso-concepto
  Entry.belongsTo(Concept,{as:'entryconcept', foreignKey:'concepto_id'});
  Concept.hasMany(Entry,{as:'conceptEntry', foreignKey:'concepto_id'});

  //ingreso-centrocosto
  Entry.belongsTo(CostCenter,{as:'costcenterentry', foreignKey:'centro_costo_id'});
  CostCenter.hasMany(Entry,{as:'entrycostcenter', foreignKey:'centro_costo_id'});

  //ingresos-empreas_sucursales
  Entry.belongsTo(CompaniesAndBranches, {as:'entries' , foreignKey:'empresas_sucurales_id'});
  CompaniesAndBranches.hasMany(Entry,{as:'entriesccompaniesandbranches', foreignKey:'empresas_sucurales_id'});

  //ingresos-departamentos
  Entry.belongsTo(Departments, {as:'ingresodepartamentos' , foreignKey:'departamentos_id'});
  Departments.hasMany(Entry,{as:'departamentosingreso', foreignKey:'departamentos_id'});

  //ingresos-usuarios
  Entry.belongsTo(Users, {as:'entryusers', foreignKey:'user_id'});
  Users.hasMany(Entry,{as:'usersentry', foreignKey:'user_id'});

  //ingresos-fechas
  Entry.belongsTo(Dates, {as:'entry' , foreignKey:'fecha_id'});
  Dates.hasMany(Entry,{as:'entrydates', foreignKey:'fecha_id'});

  //egreso-clasificasion
  Discharge.belongsTo(Clasificasion,{as:'dischargeclasificasion', foreignKey:'clasificasion_id'});
  Clasificasion.hasMany(Discharge,{as:'clasificasiondischarge', foreignKey:'clasificasion_id'});
  
  //egreso-concepto
  Discharge.belongsTo(Concept,{as:'dischargeconcept', foreignKey:'concepto_id'});
  Concept.hasMany(Discharge,{as:'conceptdischarge', foreignKey:'concepto_id'});
  
  //egreso-centrocosto
  Discharge.belongsTo(CostCenter,{as:'costcenterdischarge', foreignKey:'centro_costo_id'});
  CostCenter.hasMany(Discharge,{as:'dischargecostcenter', foreignKey:'centro_costo_id'});
  
  //egreso-empreas_sucursales
  Discharge.belongsTo(CompaniesAndBranches, {as:'discharge' , foreignKey:'empresas_sucurales_id'});
  CompaniesAndBranches.hasMany(Discharge,{as:'dischargecompaniesandbranches', foreignKey:'empresas_sucurales_id'});
  
  //egreso-departamentos
  Discharge.belongsTo(Departments, {as:'dischargedepartamentos' , foreignKey:'departamentos_id'});
  Departments.hasMany(Discharge,{as:'departamentosdischarge', foreignKey:'departamentos_id'});
  
  //egreso-usuarios
  Discharge.belongsTo(Users, {as:'dischargeusers', foreignKey:'user_id'});
  Users.hasMany(Discharge,{as:'usersdischarge', foreignKey:'user_id'});
  
  //egreso-fechas
  Discharge.belongsTo(Dates, {as:'datesdischarge' , foreignKey:'fecha_id'});
  Dates.hasMany(Discharge,{as:'dischargedates', foreignKey:'fecha_id'});

  Totals.belongsTo(CompaniesAndBranches, {as:'totales' , foreignKey:'empresas_sucurales_id'});
  CompaniesAndBranches.hasMany(Totals,{as:'totalbreaches', foreignKey:'empresas_sucurales_id'});

  Totals.belongsTo(Dates, {as:'totals' , foreignKey:'fecha_id'});
  Dates.hasMany(Totals,{as:'totalsdates', foreignKey:'fecha_id'});

  //costo_utilidad_through
  CostUtility.belongsTo(Costs, {as:'costo_utilida_pivote' , foreignKey:'gastos_id'});
  Costs.hasMany(CostUtility,{as:'pivote_costo_utilida', foreignKey:'gastos_id'});

  //compañias_sucursales_costos_utilidad
  CostUtility.belongsTo(CompaniesAndBranches, {as:'compañias_costos_utildad' , foreignKey:'empresas_sucurales_id'});
  CompaniesAndBranches.hasMany(CostUtility,{as:'costos_utildad_compañias_sucursales', foreignKey:'empresas_sucurales_id'});

  //costos_utilidad_usuarios
  CostUtility.belongsTo(Users, {as:'usuarios_costos_utilidad' , foreignKey:'user_id'});
  Users.hasMany(CostUtility,{as:'costo_utilidad_usuarios', foreignKey:'user_id'});

  //compañias_sucursales_utilidad
  UtilityDay.belongsTo(CompaniesAndBranches, {as:'compañias_utildad' , foreignKey:'empresas_sucurales_id'});
  CompaniesAndBranches.hasMany(UtilityDay,{as:'utildad_compañias_sucursales', foreignKey:'empresas_sucurales_id'});

  //fecha_utilidad
  UtilityDay.belongsTo(DateUtility, {as:'fechas_utildad' , foreignKey:'fechas_utilidad_id'});
  DateUtility.hasMany(UtilityDay,{as:'utildad_fechas', foreignKey:'fechas_utilidad_id'});

  //costo_venta_dia_fecha
  CostSaleDay.belongsTo(DateUtility, {as:'fechas_costo_dia' , foreignKey:'fechas_utilidad_id'});
  DateUtility.hasMany(CostSaleDay,{as:'costo_dia_fechas', foreignKey:'fechas_utilidad_id'});
    
  //costo_utildad_venta_dia
  CostSaleDay.belongsTo(CostUtility, {as:'costo_utilidad_dia' , foreignKey:'venta_costos_id'});
  CostUtility.hasMany(CostSaleDay,{as:'dia_costo_utilidad', foreignKey:'venta_costos_id'});

  //utildad_venta_dia
  CostSaleDay.belongsTo(UtilityDay, {as:'costo_v_d_utildad' , foreignKey:'utilidad_id'});
  UtilityDay.hasMany(CostSaleDay,{as:'d_utildad_costo_v', foreignKey:'utilidad_id'});

  FunctionsUser.belongsTo(Users, {as:'funciones_usuarios' , foreignKey:'user_id'});
  Users.hasMany(FunctionsUser,{as:'usuario_a_funciones', foreignKey:'user_id'});

  FunctionsUser.belongsTo(Functions, {as:'fuciones_a_funciones_usuarios' , foreignKey:'funciones_id'});
  Functions.hasMany(FunctionsUser,{as:'funciones_usuario_a_funciones', foreignKey:'funciones_id'});

  Categories.belongsTo(CompaniesAndBranches, { foreignKey: 'empresas_sucursales_id',as: 'sucursal_c'});
  CompaniesAndBranches.hasMany(Categories, { foreignKey: 'empresas_sucursales_id',as: 'sucursal_c'});

  Suppliers.belongsTo(CompaniesAndBranches, { foreignKey: 'empresas_sucursales_id',as: 'sucursal_s' });
  CompaniesAndBranches.hasMany(Suppliers, { foreignKey: 'empresas_sucursales_id',as: 'sucursal_s' });


  Products.belongsTo(CompaniesAndBranches, { foreignKey: 'empresas_sucursales_id',as: 'sucursal_p' });
  CompaniesAndBranches.hasMany(Products, { foreignKey: 'empresas_sucursales_id',as: 'sucursal_p' });
  Products.belongsTo(Categories, { foreignKey: 'categorias_id', as: 'categoria'  });
  Categories.hasMany(Products, { foreignKey: 'categorias_id', as: 'categoria'  });

  Products.belongsTo(Suppliers, { foreignKey: 'provedores_id',as: 'proveedor' });
  Suppliers.hasMany(Products, { foreignKey: 'provedores_id',as: 'proveedor' });

  Inventory.belongsTo(CompaniesAndBranches, { foreignKey: 'empresas_sucursales_id', as: 'sucursal_i'});
  CompaniesAndBranches.hasMany(Inventory, { foreignKey: 'empresas_sucursales_id', as: 'sucursal_i'});
  Inventory.belongsTo(Products, { foreignKey: 'productos_id',as: 'producto' });
  Products.hasMany(Inventory, { foreignKey: 'productos_id',as: 'producto' });

  Customers.belongsTo(CompaniesAndBranches, { foreignKey: 'empresas_sucursales_id', as: 'sucursal_l'});
  CompaniesAndBranches.hasMany(Customers, { foreignKey: 'empresas_sucursales_id', as: 'sucursal_l'});

  Sales.belongsTo(CompaniesAndBranches, { foreignKey: 'empresas_sucursales_id', as: 'sucursal'});
  CompaniesAndBranches.hasMany(Sales, { foreignKey: 'empresas_sucursales_id', as: 'sucursal'});
  Sales.belongsTo(Customers, { foreignKey: 'clientes_id', as: 'vC'});
  Customers.hasMany(Sales, { foreignKey: 'clientes_id', as: 'vC'});
  Sales.belongsTo(Users, { foreignKey: 'user_id', as: 'uV'});
  Users.hasMany(Sales, { foreignKey: 'user_id', as: 'uV'});

  SalesMethodPayments.belongsTo(CompaniesAndBranches, { foreignKey: 'empresas_sucursales_id', as: 'sucursal_sm'});
  CompaniesAndBranches.hasMany(SalesMethodPayments, { foreignKey: 'empresas_sucursales_id', as: 'sucursal_sm'});
  SalesMethodPayments.belongsTo(Sales, { foreignKey: 'venta_id', as: 'venta_sm'});
  Sales.hasMany(SalesMethodPayments, { foreignKey: 'venta_id', as: 'venta_sm'});
  SalesMethodPayments.belongsTo(MethodPayment, { foreignKey: ' metodo_pago_id', as: 'venta_mp'});
  MethodPayment.hasMany(SalesMethodPayments, { foreignKey: ' metodo_pago_id', as: 'venta_mp'});

  SalesProducts.belongsTo(CompaniesAndBranches, { foreignKey: 'empresas_sucursales_id', as: 'sucursal_sp'});
  CompaniesAndBranches.hasMany(SalesProducts, { foreignKey: 'empresas_sucursales_id', as: 'sucursal_sp'});
  SalesProducts.belongsTo(CompaniesAndBranches, { foreignKey: 'venta_id', as: 'venta_sp'});
  CompaniesAndBranches.hasMany(SalesProducts, { foreignKey: 'venta_id', as: 'venta_sp'});
  SalesProducts.belongsTo(Products, { foreignKey: 'productos_id', as: 'producto_sp'});
  Products.hasMany(SalesProducts, { foreignKey: 'productos_id', as: 'producto_sp'});

  OutstandingDebts.belongsTo(CompaniesAndBranches, { foreignKey: 'empresas_sucursales_id', as: 'sucursal_od'});
  CompaniesAndBranches.hasMany(OutstandingDebts, { foreignKey: 'empresas_sucursales_id', as: 'sucursal_od'});
  OutstandingDebts.belongsTo(Sales, { foreignKey: 'venta_id', as: 'venta_od'});
  Sales.hasMany(OutstandingDebts, { foreignKey: 'venta_id', as: 'venta_od'});
  OutstandingDebts.belongsTo(Customers, { foreignKey: 'clientes_id', as: 'clientes_od'});
  Customers.hasMany(OutstandingDebts, { foreignKey: 'clientes_id', as: 'clientes_od'});


}

module.exports = initModels;