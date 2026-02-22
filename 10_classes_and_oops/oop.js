const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`)
        console.log(this)   // The output of this console shows that "this" is an object
    }
}

console.log(user.username);
// console.log(user.getUserDetails());     //Why did it log "undefined"
// console.log(this)


function User(username, loginCount, isLoggedIn) {
    this.username = username    //we used "this" keyword to tell that the left hand side username is the variable and the right hand one is the parameter passed in the function as shown/written above .
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {           // We can write the function also in this object
        console.log(`Welcome ${this.username}`)
    }

    return this //Writing this is optional bcs this is default in this case and js just make it work or return the given code's output
}

// const userOne = User("hitesh", 12, true)
// const userTwo =User("chaiAurCode", 11, false)
// console.log(userOne);   // This will print the value of userTwo not userOne

const userOne = new User("hitesh", 12, true)    // "new" keyword gives new instances to each
const userTwo = new User("chaiAurCode", 11, false)

console.log(userOne);   // This will now print the value of userOne not userTwo
console.log(userOne.constructor);
// console.log(userTwo);   
