class Subject {
  constructor() {
    this.observers = [] 
  }

  subscribe (fn) {
    this.observers.push(fn)
  }

  unsubscribe (fnToRemove) {
    this.observers = this.observers.filter( fn => {
      if (fn !== fnToRemove) {
        return fn
      }
    })
  }

  fire () {
    this.observers.forEach(fn => {
      fn.call()
    });
  }
}

module.exports = Subject
