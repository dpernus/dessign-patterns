class Order {
  constructor (eventEmitter) {
    this.eventEmitter = eventEmitter
  }

  create(orderDetails) {
    console.log('\nOrder created')
    this.eventEmitter.emit('orderCreated', orderDetails);
  }
}

module.exports = Order