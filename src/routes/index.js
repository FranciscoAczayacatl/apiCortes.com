const authRoutes = require('./auth.routes');
const rolesRoutes = require('./roles.routes');
const entryRoutes = require('./entry.routes');
const routeApi = (app) => {
  app.use('/api/v1/auth', authRoutes);
  app.use('/api/v1/roles', rolesRoutes);
  app.use('/api/v1/entry', entryRoutes);
  // app.use('/api/v1/discharges', discharges)
}

module.exports = routeApi;