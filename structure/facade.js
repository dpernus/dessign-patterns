const Bank = {
  verify: (name, amount) => {
    // complex logic ...
    return true;
  }
}
 
const Credit = {
  get: name => {
    // complex logic ...
    return true;
  }
}
 
const Background =  {
  check: name => {
    // complex logic ...
    return true;
  }
}

class Mortgage {
  constructor (name) {
    this.name = name;
  }

  applyFor(amount) {
    // access multiple subsystems...
    var result = "approved";
    if (!Bank.verify(this.name, amount)) {
        result = "denied by Bank";
    } else if (!Credit.get(this.name)) {
        result = "denied for Credit";
    } else if (!Background.check(this.name)) {
        result = "denied due criminal background";
    }
    return this.name + " has been " + result +
           " for a " + amount + " mortgage";
  }
}

const mortgage = new Mortgage("Joan Templeton");
const result = mortgage.applyFor("$100,000");

console.log('***************')
console.log(result);
console.log('***************')

