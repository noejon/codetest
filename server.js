const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  propertyController = require('./api/controllers/propertyController');

const routes = require('./api/routes/propertyRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Codetest server has been started on port: ' + port);