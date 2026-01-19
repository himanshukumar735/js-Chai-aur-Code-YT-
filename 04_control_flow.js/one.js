//  if
const isUserloggedIn = true
const temperature = 41

if (temperature === 40) {
    console.log("Less than 50");
} else {
    console.log("Temperature is greater than 40");
}

//  Read about !==

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`user power : ${power}`);
}

// console.log(`user power : ${power}`);   // This will cause error bcs  power had scope only in the if section. although by using "var" keyword instead of "const" but this practice is strictly prohibited

// shorthand notation of if()

const balance = 1000

// if(balance > 500) console.log("test")  //This is called implit scope and this shorthand notation execute just one line of code. However there is a way to execute multiple lines of code by using comma "," as given below but that is considered a bad practice

// if(balance > 500) console.log("test"),console.log("Not a good practice"),  // This is considered a bad practice
// console.log("This line will also be executed as long as the condition is true");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750)
{
    console.log("Less than 750");
} else if (balance < 900) 
{
    console.log("kess than 900");
}
else {
    console.log("Less than 1200");
}

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userloggedIn && debitCard) {        // if block will run only when all the conditions are correct bcs we are using "&" operator
    console.log("Allow to buy courses");        
}

if(loggedInFromGoogle || loggedInFromEmail){        // This block will be executed if any of the case is true
    console.log("user logged from google or email");   
}



