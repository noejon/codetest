const Address = require('./address');

class Property {
  set address(address) {
    this._address = new Address(address);
  }
  get address() {
    return this._address;
  }
  set propertyTypeId(propertyTypeId) {
    this._propertyTypeId = propertyTypeId;
  }
  get propertyTypeId() {
    return this._propertyTypeId;
  }
  set readyState(readyState) {
    this._readyState = readyState;
  }
  get readyState() {
    return this._readyState;
  }
  set reference(reference) {
    this._reference = reference;
  }
  get reference() {
    return this._reference;
  }
  set shortId(shortId) {
    this._shortId = shortId;
  }
  get shortId() {
    return this._shortId;
  }
  set status(status) {
    this._status = status;
  }
  get status() {
    return this._status;
  }
  set type(type) {
    this._type = type;
  }
  get type() {
    return this._type;
  }
  set workflow(workflow) {
    this._workflow = workflow;
  }
  get workflow() {
    return this._workflow;
  }

  constructor(params) {
    if (!params) return;
    this._address = new Address(params.address);
    this._propertyTypeId = params.propertyTypeId;
    this._readyState = params.readyState;
    this._reference = params.reference;
    this._shortId = params.shortId;
    this._status = params.status;
    this._type = params.type;
    this._workflow = params.workflow;
  }

  filter() {
    if (this._workflow === 'completed' &&
      this._type === 'htv') {
      return {
        concatAddress: this._address.concat(),
        type: this._type,
        workflow: this._workflow
      };
    }
  }
}

module.exports = Property;