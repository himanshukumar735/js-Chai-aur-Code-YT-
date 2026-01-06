const score = 400;
// console.log(score);
// console.log("The type of score is :-", typeof (score));


const balance = new Number(100)
// console.log(balance);
// console.log("The type of balance is :-", typeof (balance));
// console.log(balance.toString().length);   // changed to string and then used the string method
// console.log(balance.toFixed(2));     // Gives decimal place up to 2 places


const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());  // Indian number system
// console.log(hundreds.toLocaleString("en-IN"));  // Indian number system
// console.log(hundreds.toLocaleString("en"));  // American number system


// console.log(score === 400)
// console.log(400 === 400)
// console.log(balance === 100)
// console.log(100 === 100)
// console.log(balance == 100)

//               Maths

// console.log(Math)
// console.log(Math.abs(-4));    // abs() make the negative value positive while the inverse isnt true
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))  // We will get 5 not 4 bcs of ceil()
// console.log(Math.floor(4.9))  // We will get 4 not 5 bcs of floor() rounded of the value to the nearest smaller number
// console.log(Math.pow(9,3));
// console.log(Math.min(2,3,1,87));
// console.log(Math.max(2,3,1,87));

console.log(Math.random());   // value will range from 0 to 1 like 0.0073456732
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10) + 1);   // It make sure the minimum number we will get is 1

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // min is added to make sure that the number we will get will lie in the range of min to max
