// Singleton
// object.create()

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Himanshu",
    "full name": "Himanshu Kumar",
    [mySym]: "mykey1",   // to use it as a symbol we must use [mySym] instead of mySym
    age: 20,
    location: "Gr.Noida",
    email: "himanshukr864@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);


// console.log(JsUser.email);
// console.log(JsUser[email]);   // We'll get error bcs  email is string
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);  // We are not using the symbol which can be known by using typeof(). this code wont run bcs mySym is replaced by [mySym]
// console.log(typeof(JsUser.mySym));  // This code wont run bcs of the above reason

// console.log(JsUser[mySym]);  // We are now using the symbol which can be known by using typeof()
// console.log(typeof (JsUser[mySym])); // We'll get type as string here jsUser[mySym] will return a string
// console.log(typeof (mySym));  // we will get symbol bcs mysym is defined as symbol

JsUser.email = "himanshu@updated.com" // email is updated now
// console.log(JsUser.email);
// Object.freeze(JsUser)
// JsUser.email = "himanshu@freeze.com" // email wont update bcs freeze() is used now
// console.log(JsUser.email);

//now adding a function to JsUser
JsUser.greeting = function () {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


// myArray = ["h", "i"]
// console.log(myArray[1]);
