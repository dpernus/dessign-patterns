const Subject = require('./observerSubject.js')

function ObserverTest () {
  console.log('testing observer')
}

function AnotherObserver () {
  console.log('the second observer was ejecuted')
}

const subject = new Subject()
subject.subscribe(ObserverTest)
subject.subscribe(AnotherObserver)

subject.fire()

subject.unsubscribe(AnotherObserver)

console.log('\nAfter unsubscribe...')
subject.fire()