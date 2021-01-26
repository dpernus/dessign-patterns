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

const pizza = new Pizza()
  .addTomato()
  .addCheese()
  .addPineappleSlices(3)
  .addBaconStrips(4)
  .addOtherIngredients(['Pepperoni', 'Sausages'])
  .build()

const simplePizza = new Pizza()
  .addThinDough()
  .addPineappleSlices(5)
  .addOtherIngredients(['Ham'])
  .build()

console.log(pizza)
console.log(simplePizza)