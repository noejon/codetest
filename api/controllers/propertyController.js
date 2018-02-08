const Property = require('../models/property');

const filter = (payload) => {
  if (!payload || !Array.isArray(payload)) return;
  const response = [];
  for (const property in payload) {
    const filteredProperty = property.filter();
    if(filteredProperty) response.push(filteredProperty);
  }
}

exports.filterProperties = (payload) => {
  Promise
    .resolve(payload)
    .then(JSON.parse)
    .then((json) => {
      return filter(json.payload);
    })
    .catch((error) => {
      return {
        "error": "Could node decode request: JSON parsing failed"
      };
    })
}