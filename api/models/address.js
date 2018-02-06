class Address {
    set buildingNumber(buildingNumber){ this._buildingNumber = buildingNumber; }
    get buildingNumber() { return this._buildingNumber; }
    set lat(lat){ this._lat = lat; }
    get lat() { return this._lat; }
    set lon(lon){ this._lon = lon; }
    get lon() { return this._lon; }
    set postcode(postcode){ this._postcode = postcode; }
    get postcode() { return this._postcode; }
    set state(state){ this._state = state; }
    get state() { return this._state; }
    set street(street){ this._street = street; }
    get street() { return this._street; }
    set suburb(suburb){ this._suburb = suburb; }
    get suburb() { return this._suburb; }
    set unitNumber(unitNumber){ this._unitNumber = unitNumber; }
    get unitNumber() { return this._unitNumber; }
}

module.exports = Address;