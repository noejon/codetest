const assert = require('assert');
const expect = require('chai').expect;
const Address = require('./address');


describe('Address', () => {
    describe('#constructor', () => {
        it('should return a truthy object when is null', () => {
            const address = new Address();
            expect(address).to.be.ok;
        })
        it('should populate the street property when params.street has a value', () => {
            const streetValue = 'Victoria Park Parade'
            const address = new Address({street: streetValue});
            assert.equal(address.street, streetValue);
        })
    /**
     * Here we should add tests to verify that the values are populated according to the params
     * values, but to gain some time it has not be implemented further
     */
    })
  describe('#concat()', () => {
    it('should return an empty string if the address information is not populated', () => {
        const address = new Address();
        assert.equal(address.concat(), "");
    });
    it('should return "6 Victoria park parade Zetland NSW 2017"', () => {
        const address = new Address({
          buildingNumber: '6',
          postcode: '2017',
          state: 'NSW',
          street: 'Victoria park parade',
          suburb: 'Zetland'
        });
        assert.equal(address.concat(), '6 Victoria park parade Zetland NSW 2017');
    });
  });
});