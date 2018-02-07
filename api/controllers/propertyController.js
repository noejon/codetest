const Property = require('../models/property');
const Error = require('../models/error');

const parseAsync = Promise.(JSON.parse);

exports.filterProperties = (payload) => {
  Promise
    .resolve(payload)
    .then(JSON.parse)
    .catch((error) => {
      return { "error": "Could node decode request: JSON parsing failed" };
    })
}