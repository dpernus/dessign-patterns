class Shipping {
  constructor () {
    this.shippingCompany = ''
  }

  setStrategy (company) {
    this.shippingCompany = company
  }

  calculate (pack) {
    return this.shippingCompany.calculate(pack)
  }
}

class UPS {
  calculate (pack) {
    // calculations...
    return "$45.95";
  }
} 

class USPS {
  calculate (pack) {
    // calculations...
    return "$39.40";
  }
}

class Fedex {
  calculate (pack) {
    // calculations...
    return "$43.20";
  }
}

module.exports = {
  Shipping, 
  UPS, 
  USPS, 
  Fedex
}