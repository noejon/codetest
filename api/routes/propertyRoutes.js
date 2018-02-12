module.exports = (app) => {
  const propertyController = require('../controllers/propertyController');

  // property routes
  app.route('/filteredProperties')
    .post(propertyController.filterProperties)
};