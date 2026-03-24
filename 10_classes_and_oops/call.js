function SetUsername(username) {
    // Complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password) {
    // SetUsername(username)   // SetUsername() is getting called but not in the way we want
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@facebook.com", "123")
console.log(chai)       