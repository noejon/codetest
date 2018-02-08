const assert = require('assert');
const expect = require('chai').expect;
const Property = require('./property');


describe('Property', () => {
  describe('#constructor', () => {
    it('should return a truthy object when is null', () => {
      const property = new Property();
      expect(property).to.be.ok;
    })
    it('should populate the propertyTypeId when params.propertyTypeId has a value', () => {
      const propertyTypeIdValue = 42
      const property = new Property({
        propertyTypeId: propertyTypeIdValue
      });
      assert.equal(property.propertyTypeId, propertyTypeIdValue);
    })
    /**
     * Here we should add tests to verify that the values are populated according to the params
     * values, but to gain some time it has not be implemented further
     */
  })
  describe('#filter()', () => {
    it('should return undefined if the workflow is not set as "completed" and the type is "htv"', () => {
      const property = new Property({
        workflow: "Not completed",
        type: "htv" 
      });
      assert.equal(property.filter(), undefined);
    });
    it('should return undefined if the type is not set as "htv" and the workflow is "completed"', () => {
      const property = new Property({
        workflow: "completed",
        type: "not htv" 
      });
      assert.equal(property.filter(), undefined);
    });
    it('should return a truthy object if the type is set as "htv" and the workflow is "completed"', () => {
      const property = new Property({
        workflow: "completed",
        type: "htv" 
      });
      expect(property.filter()).to.be.ok;
    });
  });
});