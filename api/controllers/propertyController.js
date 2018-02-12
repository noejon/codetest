const Property = require('../models/property');

const filter = (payload) => {
  if (!payload || !Array.isArray(payload)) return;
  const response = [];
  for (const object of payload) {
    const property = new Property(object);
    const filteredProperty = property.filter();
    if (filteredProperty) response.push(filteredProperty);
  }
  return response;
}

exports.filterProperties = async (req, res) => {
  let response = await filter(req.body.payload);
  res.json(response);
}