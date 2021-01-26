const  { EventEmitter } = require('events')
const eventEmitter = new EventEmitter()

const Order = require('./publisher')
const { subscribers } = require('./subscriber')

const order = new Order(eventEmitter)
subscribers(eventEmitter)

order.create({
  product: 'shoes',
  name: 'Shoeless Joe Jackson',
  email: 'joe@whitesocks.com'
});



