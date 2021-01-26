const subscribers = (eventEmitter) => {
  eventEmitter.on('orderCreated', emailer.sendEmail)
  eventEmitter.on('orderCreated', database.saveOrder)  
}

const emailer = {
  sendEmail: orderDetails => {
    console.log('Email about', orderDetails.product, 'sent to', orderDetails.email);
  }
}

const database = {
  saveOrder: orderDetails => {
    console.log('Order for', orderDetails.product, 'from', orderDetails.name, 'saved in DB\n');
  }
}

module.exports = {
  subscribers
}

