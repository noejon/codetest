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

    constructor(params) {
        if(!params) return;
      this._buildingNumber = params.buildingNumber;
      this._lat = params.buildingNumber;
      this._lon = params.buildingNumber;
      this._postcode = params.postcode;
      this._state = params.state;
      this._street = params.street;
      this._suburb = params.suburb;
      this._unitNumber = params.unitNumber;
    }

    concat() {
      return (((this._buildingNumber && this._buildingNumber + " ") || "")
        + ((this._street && this._street + " ") || "")
        + ((this._suburb && this._suburb + " ") || "")
        + ((this._state && this._state + " ") || "") 
        + ((this._postcode && this._postcode + " ") || ""))
        .trim();
    }
}

module.exports = Address;