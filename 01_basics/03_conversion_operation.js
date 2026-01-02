let score = NaN      // try using different data types like null,undefined,boolean,string etc

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)


// "33" => 33
//"33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "Himanshu"   // if the string is empty. it is considered falsy

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1=> true
// "" => false   ;  "Himanshu" => true

let someNumber = 33

let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof (stringNumber));

// Operations

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2 + 2);
// console.log(2_2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "Hello"
let str2 = " Himanshu"

let str3 = str1 + str2
// console.log(str3);

// console.log(1 + 2);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(3 + 4 * 5 % 3);   // result is 5 bcs of precedence
// console.log((3 + 4) * 5 % 3);

// console.log(true);  // Prints true
// console.log(+true);  // prints 1
// console.log(+"");  // prints 0 bcs + converts the empty string into boolean

let num1, num2, num3

num1 = num2 = num3 = 2 + 2   // Not preffered

let gameCounter = 100
gameCounter++
console.log(gameCounter);

let gameScore = 100
++gameScore
console.log(gameScore);


// notes for + (unary operator):- + try to convert any value into a number and if that doesnt give a valid whole number . it returns NaN which is itself a number
console.log(+"66");
console.log(+null);
console.log(+undefined);

