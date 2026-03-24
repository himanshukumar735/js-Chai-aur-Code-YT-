// // ES 6

class User1 {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User1("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword())
console.log(chai.changeUsername())

// Behind the scene (what if we didnt have class syntax)

function User2(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

User2.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new User2("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword())
console.log(tea.changeUsername())