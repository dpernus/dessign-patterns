
function singletonExample() {
  let instance = null
  return function() {
    if (instance === null) {
      instance = 'my Singleton'
      console.log('  My singleton was created')
    }
    console.log('   Returning instance: ', instance)
    return instance
  }
}


const getInstance = singletonExample()
console.log('call 1 to singleton: ')
getInstance()

console.log('call 2 to singleton: ')
getInstance()

// const singletonExample = {
//   _singleton: null,
//   getSingleton: () => {
//     if(!this._singleton) {
//       this._singleton = 'my Singleton'
//       console.log('  My singleton was created')
//     }
//     console.log(`  ${this._singleton}`)
//     return this._singleton
//   }
// }

// Object.defineProperty( singletonExample, "_singleton",
// { writable: false, configurable: false} );
// singletonExample._singleton = 'pepe'