// Prepare this for the interview 
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor)     // writable:false means the value cant be changed, enumerable:false means the loops cant iterate or see these and configurable means we cant delete the value of pi or pi in the program we wrote

console.log(Math.PI)
Math.PI = 5
console.log(Math.PI)        // It will still log 3.14

const chai = {
    name: "ginger chai",
    price: 250,
    available: true,

    orderChai: function () {
        console.log("chai nhi bani")
    }
}

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai))
console.log(Object.getOwnPropertyDescriptor(chai, "name"))      //We will have to be specific that which property from which object we want to get or want to work with


Object.defineProperty(chai, "name", {
    writable: false,        // Here, we are not allowing the name of the chai to change in the future
    enumerable: false   //When we run the loop, the name of the chai wont be printed
});

chai.name = "masala chai"; // The name is not going to change
chai.price = 400;           // Price will be changed absolutely
console.log(chai.name);     // the old name will be printed
console.log(chai.price);    // Price has been updated though

// for (let [key, value] of chai) {        // We will get the error (chai is not iterable here)
//     console.log(`${key} : ${value}`)
// }

for (let [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`)
}

for (let [key, value] of Object.entries(chai)) {

    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    }
}
