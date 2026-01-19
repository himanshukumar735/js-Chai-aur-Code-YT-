//  for of -> value

// for (const element of object) {    // here object means which entity we need to iterate

// }

const arr = [1, 2, 3, 4, 5]
for (const i of arr) {
    console.log(i);
}

const greetings = "Hello World"
for (const greet of greetings) {
    if (greet == " ") {
        continue
    }
    console.log(`Each char is ${greet}`);
}

//  Maps

const map = new Map()   // map is an object which stores "key", "Value" pair. It stores unique key value
map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('FR', "FRANCE")
map.set('FR', "FRANCE")

console.log(map);

console.log("Key-Value will be printed not only the key");

for (const key of map) {
    console.log(key);
}

console.log("Only the keys will be printed");
for (const [key] of map) {      // This is called destructuring 
    console.log([key]);
}

console.log("Now, the keys along with its will be printed");
for (const [key, value] of map) {      // This is called destructuring 
    console.log(key, ":-", value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman',
}

// for (const [key, value] of myObject) {       // forof loop cant iterate normal obeject
//     console.log(key, ":-", value);
// }

