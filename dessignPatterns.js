const gadgetFactory= require('./creation/factoryExample')

const myLaptop = gadgetFactory.createGadget("Laptop", {
    ram: 8,
    ssd: 256,
    name: "My MacBook Pro"
});
const myTablet = gadgetFactory.createGadget("Tablet", {
    ram: 4,
    hdd: 128,
    name: "My iPad",
    network: '4G'
});

console.log(myLaptop);
console.log(myTablet);