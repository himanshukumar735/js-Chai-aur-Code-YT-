// On the basis of how values are stored and copied in memory. There are two data types

// Primitive (7 => string, number, boolean, null, undefined, symbol, bigint)

const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 873647823657834654958745684n    // stored in bigInt



// Non primitive (Reference types)

//Array, Objects(master it), functions

const heroes = ["Shaktiman", "Naagraj", "Doga"];   // array
let myObj = {                 //object
    Name: "Himanshu",
    Age: 20
}

// function(){ };   // function definition
const myFunction = function () {
    console.log("Hello World");
}

// console.log(typeof bigNumber);
// console.log(typeof myFunction);
// console.log(typeof outsideTemp);    // object
// console.log(typeof scoreValue);
// console.log(typeof null);      //object
// console.log(typeof myFunction);
// console.log(typeof id);
// console.log(typeof anotherId);
// console.log(typeof myObj);


// The type of all not primitive data type is object ? . Even function(data type) is called object function




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitve), Heap (Non-Primitive)

// let myYoutubeName = "Himanshukumar.com"

// let anotherName = myYoutubeName

// console.log(anotherName);



let mineYoutubeName = "Himanshukumar.com"

let anotherName = mineYoutubeName
anotherName = "chaiaurcode"

console.log(mineYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@upi"
}

let userTwo = userOne

userTwo.email = "updated@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
