function sayMyName(params) {
    console.log("H");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("U");
}

sayMyName  // reference of function
// sayMyName()  //execution of function

function addTwoNumbers(number1, number2) {   //number1 & number2 are parameters and since we are returning nothing. The function return "undefined" by default
    console.log(number1 + number2);
}

// addTwoNumbers(3, 4) //Arguments are passed and the function is called and thus the sum is printed bcs of console.log()
// const result = addTwoNumbers(3, 7)  // This line has two work the second part addTwoNumbers(3,7) is calling the function and thus we gwt the sum as 10 and the work of result is to store the return entity which is "undefined" here
// console.log("Result:", result);    // Prints undefined😲 => since Result is storing the "undefined" thatswhy we got undefined in the terminal output 

// function addTwoNumbers(number1, number2) {

//     // let sum = number1 + number2
//     // return sum

//     // return number1 + number2
// }

// const result = addTwoNumbers(3, 5)

// console.log("Now the result is :", result);

function loginUsername(username = "Execute") {  // if no argument is given then we will always get a log "Execute just logged in"
    if (username === undefined) {  // We can replace "username === undefined" with just "!username"
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUsername("Himanshu"))
// console.log(loginUsername())  // Since no argument is given so we are getting log as "Execute just logged in" and lets say if the argument is also not given and parameter is also not hardcorded with "execute". We would get "undefined"

function calculateCartPrice(val1, val2, ...num1) {   // if we have not used ... operator, we would be getting the first input only(200) and the rest would be ignored and we get the result in the array
    return num1
    // return num1, val1  // We will only get val1 return bcs return statement just return the last value
}

// console.log(/calculateCartPrice(200, 400, 500, 2000)); // The first two value wont be printed bcs those are taken by val1 and val2

const user = {
    "username": "Himanshu",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const MyNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(MyNewArray));

console.log(returnSecondValue([200, 800, 500, 1000]));
