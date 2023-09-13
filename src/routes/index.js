const authRoutes = require('./auth.routes');
const rolesRoutes = require('./roles.routes');
const entryRoutes = require('./entry.routes');
const dischargesRoutes = require('./discharges.routes');
const totalsRoutes = require('./totals.routes');
const usersRoutes = require('./users.route');
const branchRoutes = require('./branch.routes');
const conceptRoutes = require('./concept.routes');

const routeApi = (app) => {
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/roles', rolesRoutes);
  app.use('/api/v1/entry', entryRoutes);
  app.use('/api/v1/discharges', dischargesRoutes);
  app.use('/api/v1/totals', totalsRoutes);
  app.use('/api/v1/users', usersRoutes);
  app.use('/api/v1/branch', branchRoutes);
  app.use('/api/v1/concept', conceptRoutes)
}

module.exports = routeApi;