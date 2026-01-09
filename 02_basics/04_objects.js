// const tinderUser = new Object()  // Singleton object
const tinderUser = {}  // non Singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUSer = {
    email: "some@gmail.com",
    fulllName: {
        userfullname: {
            firstname: "Himanshu",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUSer.fulllName.userfullname.lastname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)  // this syntax is preferred (target, sources)

const obj3 = { ...obj1, ...obj2 }

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "himanshu@gmail.com"
    },

    {
        id: 2,
        email: "dipanshu@gmail.com"
    },

    {
        id: 1,
        email: "priyanshu@gmail.com"
    }
]

// console.log(users[0].email);

// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

