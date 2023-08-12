const Users = require('./users.models');
const Roles = require('./roles.model');
const Branch = require('./branch.model');
const Entry = require('./entry.model');
const Discharge = require('./discharge.model');
const Totals = require('./totals.model');
const Dates = require('./dates.model')

const initModels = () =>{
  Users.belongsTo(Branch, {as:'branches', foreignKey:'branch_id'});
  Branch.hasMany(Users,{as:'users', foreignKey:'branch_id'});
  Users.belongsTo(Roles, {as:'roles' , foreignKey:'role_id'});
  Roles.hasMany(Users,{as:'usersroles', foreignKey:'role_id'});
  Entry.belongsTo(Branch, {as:'entries' , foreignKey:'branch_id'});
  Branch.hasMany(Entry,{as:'entriesbreaches', foreignKey:'branch_id'});
  Discharge.belongsTo(Branch, {as:'discharge' , foreignKey:'branch_id'});
  Branch.hasMany(Discharge,{as:'dischargebreaches', foreignKey:'branch_id'});
  Totals.belongsTo(Branch, {as:'totales' , foreignKey:'branch_id'});
  Branch.hasMany(Discharge,{as:'totalbreaches', foreignKey:'branch_id'});
  Entry.belongsTo(Dates, {as:'entry' , foreignKey:'date_id'});
  Dates.hasMany(Entry,{as:'entrydates', foreignKey:'date_id'});
  Discharge.belongsTo(Dates, {as:'discharges' , foreignKey:'date_id'});
  Dates.hasMany(Discharge,{as:'dischargedates', foreignKey:'date_id'});
  Totals.belongsTo(Dates, {as:'totals' , foreignKey:'date_id'});
  Dates.hasMany(Totals,{as:'totalsdates', foreignKey:'date_id'});
}

module.exports = initModels;