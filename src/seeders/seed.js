
const db = require('../utils/database');
const Branch = require('../models/branch.model');
const Role = require('../models/roles.model');
const Users = require('../models/users.models');
const Discharge = require('../models/discharge.model');
const Entry = require('../models/entry.model');
const Dates = require('../models/dates.model');
const Totals = require('../models/totals.model');



const roles = [
  { name: 'Admin' },
  { name: 'User' },
];

const branches = [
  { name: 'Uruapan' },
  { name: 'tinguindin' },
];

const dates=[
  {date:new Date('2023-8-9')},
  {date:new Date('2023-8-8')},
  {date:new Date('2023-8-7')}
];
const users = [
  { firstname: 'ashley', lastname: 'gaona', email: 'ash@mail.com', password: '1234', role_id: 1, branch_id: 1},
  { firstname: 'francisco', lastname: 'garcia', email: 'fran@mail.com', password: '1234', role_id: 1, branch_id: 1},
  { firstname: 'marta', lastname: 'Araiza', email: 'mart@mail.com', password: '1234', role_id: 2, branch_id: 2}
];

const entries = [
  {concept: 'blalal', total:1000.00,branch_id:1 , date_id:1},
  {concept: 'blalal2', total:1000.00,branch_id:2 , date_id:2},
  {concept: 'blalal3', total:1000.00,branch_id:1 , date_id:3},
  {concept: 'blalal', total:1000.00,branch_id:2 , date_id:1},
  {concept: 'blalal2', total:1000.00,branch_id:1 , date_id:2},
  {concept: 'blalal3', total:1000.00,branch_id:2 , date_id:3},
];

const discharges = [
  {concept: 'blalal', total:500.00,branch_id:1 ,date_id:1},
  {concept: 'blalal2', total:500.00,branch_id:2 ,date_id:2},
  {concept: 'blalal3', total:500.00,branch_id:1 ,date_id:3},
  {concept: 'blalal', total:500.00,branch_id:2 ,date_id:1},
  {concept: 'blalal2', total:500.00,branch_id:1 ,date_id:2},
  {concept: 'blalal3', total:500.00,branch_id:2 , date_id:3},
]

const totals = [
  { entry: 1000.00, discharge:-500.00, total:1500.00 ,result:'utilida',branch_id:1,date_id:1},
  { entry: 1000.00, discharge:-500.00, total:1500.00 ,result:'utilida',branch_id:2,date_id:1},
  { entry: 1000.00, discharge:-500.00, total:1500.00 ,result:'utilida',branch_id:1,date_id:2},
  { entry: 1000.00, discharge:-500.00, total:1500.00 ,result:'utilida',branch_id:2,date_id:2},
  { entry: 1000.00, discharge:-500.00, total:1500.00 ,result:'utilida',branch_id:1,date_id:3},
  { entry: 1000.00, discharge:-500.00, total:1500.00 ,result:'utilida',branch_id:2,date_id:3},
  
]


const seedRoles = async () => {
  await Role.bulkCreate(roles);
  console.log('Roles insertados exitosamente.');
};


const seedBranches = async () => {
  await Branch.bulkCreate(branches);
  console.log('Branches insertados exitosamente.');
};
const seedDates = async () => {
  await Dates.bulkCreate(dates);
  console.log('dates insertados exitosamente.');
};

const seedUsers = async () =>{
  await Users.bulkCreate(users);
  console.log('Users insertados exitosamente.');
}

const seedEntries = async () => {
  await Entry.bulkCreate(entries);
  console.log('Entries insertados exitosamente.');
}

const seedDischages = async () => {
  await Discharge.bulkCreate(discharges);
  console.log('Dischages insertados exitosamente.');
}
const seedTotals = async () => {
  await Totals.bulkCreate(totals);
  console.log('totals insertados exitosamente.');
};
 

const seedDatabase = async () => {
  try {
    await db.sync({ force: true });
    await seedRoles();
    await seedBranches();
    await seedDates();
    await seedUsers();
    await seedEntries();
    await seedDischages();
    await seedTotals();
    console.log('Sembrado de base de datos completado.');
    process.exit(); 
    
  } catch (error) {
    console.error('Error durante la siembra:', error);
    process.exit(1); 
  }
};

seedDatabase();
