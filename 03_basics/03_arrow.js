const user = {
    username: "Priyanshu",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to website`);
        console.log(this);

    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);  // empty {} will be printed bcs this prints the current scenario

// function chai() {
//     console.log(this);
// }

// chai()

// function chai() {
//     username = "Himanshu"
//     console.log(this.username);
// }

// chai()  // This log a defined result

// function chai() {
//     let username = "Dipanshu"
//     console.log(this.username);
// }

// chai()  // This log "undefined"

// const chai = function () {
//     let username = "Dipanshu"
//     console.log(this.username);
// }

// chai()

const chai = () => {        // Arrow function
    let username = "Ramayana"
    console.log(this.username);
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2   // Explicit return function i.e, need "return"
// }

// console.log(addTwo(3, 4));


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)  // Implicit return() means this doesnt need to write the "return" keyword  

// console.log(addTwo(3, 9));

// const addTwo = (num1, num2) => { username: "Himanshu" }

// console.log(addTwo(3, 9));  // prints "undefined" bcs to get a valid return we either have to use "return" keyword or use the "()"

const addTwo = (num1, num2) => ({ username: "Himanshu" })

console.log(addTwo(3, 9));  // log "{username:Himanshu}"
