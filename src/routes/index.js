const authRoutes = require('./auth.routes');
const rolesRoutes = require('./roles.routes');
const entryRoutes = require('./entry.routes');
const dischargesRoutes = require('./discharges.routes');
const totalsRoutes = require('./totals.routes')
const routeApi = (app) => {
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/roles', rolesRoutes);
  app.use('/api/v1/entry', entryRoutes);
  app.use('/api/v1/discharges', dischargesRoutes);
  app.use('/api/v1/totals', totalsRoutes)
}

module.exports = routeApi;