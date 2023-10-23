const authRoutes = require('./auth.routes');
const rolesRoutes = require('./roles.routes');
const entryRoutes = require('./entry.routes');
const dischargesRoutes = require('./discharges.routes');
const totalsRoutes = require('./totals.routes');
const usersRoutes = require('./users.route');
const branchRoutes = require('./branch.routes');
const conceptRoutes = require('./concept.routes');
const companyRoutes = require('./company.routes');
const departamentsRoutes = require('./deaprtaments.routes');
const branchesAndCompanyRoutes = require('./branchesAndCompany.routes');
const classificationRoute = require('./clasificasion.routes');
const costCenterRoute = require('./costCenter.routes');

const routeApi = (app) => {
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/roles', rolesRoutes);
  app.use('/api/v1/entry', entryRoutes);
  app.use('/api/v1/discharges', dischargesRoutes);
  app.use('/api/v1/totals', totalsRoutes);
  app.use('/api/v1/users', usersRoutes);
  app.use('/api/v1/branch', branchRoutes);
  app.use('/api/v1/concept', conceptRoutes);
  app.use('/api/v1/company', companyRoutes);
  app.use('/api/v1/departaments', departamentsRoutes);
  app.use('/api/v1/bac', branchesAndCompanyRoutes);
  app.use('/api/v1/clasificasion', classificationRoute);
  app.use('/api/v1/costcenter', costCenterRoute);


}

module.exports = routeApi;