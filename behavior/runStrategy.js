const { Shipping, UPS, USPS, Fedex } = require('./strategy')

const pack = { from: "76712", to: "10012", weigth: "lkg" };

const ups = new UPS();
var usps = new USPS();
var fedex = new Fedex();

const shipping = new Shipping()

shipping.setStrategy(ups)
console.log(`\nStrategy 1: ${shipping.calculate(pack)}`)

shipping.setStrategy(usps)
console.log(`Strategy 2: ${shipping.calculate(pack)}`)

shipping.setStrategy(fedex)
console.log(`Strategy 3: ${shipping.calculate(pack)}\n`)
