class Tablet {
  constructor({ ram, hdd, name, network }) {
    this.ram = ram || 0;
    this.hdd = hdd || 0;
    this.network = network || 0;
    this.name = name || "";
  };
}

class Laptop {
  constructor({ ram, hdd, name }) {
    this.ram = ram || 0;
    this.hdd = hdd || 0;
    this.name = name || "";
  };
}

const gadget = { Laptop, Tablet };

const gadgetFactory = {
  createGadget(type, attributes) {
    const GadgetType = gadget[type];
    return new GadgetType(attributes);
  }
};

module.exports = gadgetFactory

