console.log("Comments are hidden by the extension");

// const promiseOne = new Promise(function (resolve, reject) {
//     //Do an async task, DB calls, cryptography, network call    
//     setTimeout(function () {
//         console.log('Async task is complete');
//         resolve() // Now the resolve and the then() is connected
//     }, 1000)
// }) //promise has been created now

// promiseOne.then(function () {
//     console.log("Promise consumed"); //This wont be printed bcs we have not connected this "then" keyword with the "resolve" . We will connect this via the same "resolve keyword ( resolve() )"
// })

// A cleaner way to write the same code
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()
    }, 1000)
}).then(function () {
    console.log("Promise consumed");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@code.com" })       //This says that the data is coming directly from the database
    }, 1000)
})

promiseThree.then(function (user) {
    console.log("User data from promise three is ", user);
})


// promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve()
//     }, 1000)
// }).then(function () {
//     console.log({ username: "Himanshu_Kumar", email: "himanshu@code.com" });        //In this case we have hardcoded the data which makes no sense in the real world
// })
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Dipanshu", password: 123 })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then(function (myUser) {
    console.log(myUser);        //The user's data will be printed if there is no error
}).catch(function (err) {    // This handles the error if things go wrong
    console.log(err);       // "ERROR: Something went wrong" will be printed if error comes
});

promiseFour
    .then((user) => {
        console.log("The required data of user is ", user)
        return user.username
    })
    .then((username) => {
        console.log(username)
    })
    .catch(function (error) {
        console.log("Error found")
    })
    .finally(() => console.log("The promise is either resolved or rejected"))

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123java" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumepromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumepromiseFive()

// async function getAllUsers(params) {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }

// Writing the same in .then and .catch

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.log(error))
