const Address = require('./address');

class Property {

  constructor(params) {
    if (!params) return;
    this.address = new Address(params.address);
    this.propertyTypeId = params.propertyTypeId;
    this.readyState = params.readyState;
    this.reference = params.reference;
    this.shortId = params.shortId;
    this.status = params.status;
    this.type = params.type;
    this.workflow = params.workflow;
  }

  filter() {
    if (this.workflow === 'completed' &&
      this.type === 'htv') {
      return {
        concatAddress: this.address.concat(),
        type: this.type,
        workflow: this.workflow
      };
    }
  }
}

module.exports = Property;