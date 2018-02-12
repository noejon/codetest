const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(bodyParser.json());

/**
 * Check if there is an error with the request
 */
app.use((err, req, res, next) => {
  if(err) res.json({error: "Could not decode request: JSON parsing failed"});
  else next();
})

const routes = require('./api/routes/propertyRoutes'); //importing route
routes(app); //register the route

app.listen(port);