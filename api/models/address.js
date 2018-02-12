class Address {

  constructor(params) {
    if (!params) return;
    this.buildingNumber = params.buildingNumber;
    this.lat = params.buildingNumber;
    this.lon = params.buildingNumber;
    this.postcode = params.postcode;
    this.state = params.state;
    this.street = params.street;
    this.suburb = params.suburb;
    this.unitNumber = params.unitNumber;
  }

  concat() {
    return (((this.buildingNumber && this.buildingNumber + " ") || "") +
        ((this.street && this.street + " ") || "") +
        ((this.suburb && this.suburb + " ") || "") +
        ((this.state && this.state + " ") || "") +
        ((this.postcode && this.postcode + " ") || ""))
      .trim();
  }
}

module.exports = Address;