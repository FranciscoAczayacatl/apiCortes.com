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

const initModels = () =>{

  //usuarios-sucursal
  Users.belongsTo(Branch, {as:'sucursales_id', foreignKey:'sucursal_id'});
  Branch.hasMany(Users,{as:'users', foreignKey:'sucursal_id'});

  //usuarios-roles
  Users.belongsTo(Roles, {as:'rol_id' , foreignKey:'roles_id'});
  Roles.hasMany(Users,{as:'usersroles', foreignKey:'roles_id'});

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
}

module.exports = initModels;