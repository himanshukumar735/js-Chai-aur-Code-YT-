class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)     //  Here the superkeyword goes straight to the top part of the code where username is getting stored and get the username
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.addCourse()
chai.logMe()
const masalaChai = new User("masalaChai")

// masalaChai.addCourse()  // dont have the access of addCourse
masalaChai.logMe()  

console.log(chai === masalaChai)
console.log(chai === Teacher)
console.log(chai instanceof Teacher)        // True bcs chai is made of teacher or bring the instance from the teacher for itself
console.log(chai instanceof User)           // True bcs chai is taking instance from the teacher and the teacher is taking the instance from the  User

