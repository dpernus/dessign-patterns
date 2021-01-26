class Pizza {
  constructor() {
    this.tomato = false;
    this.cheese = false;
    this.thinDough = false;
    this.pineappleSlices = 0;
    this.baconStrips = 0;
    this.otherIngredients = [];
  }

  addTomato() {
      this.tomato = true;
      return this;
    }
  addCheese() {
      this.cheese = true;
      return this;
    }
  
  addThinDough() {
      this.thinDough = true;
      return this;
    }
  
  addPineappleSlices(slices) {
      this.pineappleSlices = slices;
      return this;
    }
  addBaconStrips(strips) {
      this.baconStrips = strips;
      return this;
    }
  addOtherIngredients(ingredients) {
      this.otherIngredients.push(ingredients);
      return this;
    }
  build() {
      return {
        tomato: this.tomato,
        cheese: this.cheese,
        thinDough: this.thinDough,
        pineappleSlices: this.pineappleSlices,
        baconStrips: this.baconStrips,
        otherIngredients: this.otherIngredients
      };
    }
}

// let pizza = {
//     tomato: false,
//     sauce: false,
//     thinDou: false,
//     pineappleSlices: 0,
//     baconStrips: 0,
//     otherIngredients: []
// }

// addTomato = () => pizza.tomato = true
// addSauce = () => pizza.sauce = true
// addThinDou = () => pizza.thinDou = true
// addPineapple = (pineappleSlices) => pizza.pineappleSlices = pineappleSlices
// addBaconStrips = (baconStrips) => pizza.baconStrips = baconStrips
// addOtherIngredients = (additionalIngredients) => otherIngredients.push(additionalIngredients)

// const hawainaPizza = new pizza(true, true, false, 4, 5, ['jamon'])
// console.log(hawainaPizza) 

module.exports = { Pizza }