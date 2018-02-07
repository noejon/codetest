module.exports = (app) => {
  const property = require('../controllers/propertyController');

  // property routes
  app.route('/filteredProperties')
    .get(property)
};