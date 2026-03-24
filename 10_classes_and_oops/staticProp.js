class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`)
    }

    static createID() {     //This will give an error and this is what we want bcs we didnt wanted to give the access of this to the user
        return `123`
    }

}

const hitesh = new User("hitesh")
// console.log(hitesh.createID())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
console.log(iphone.createID())      //Again, the error will come bcs we dont have access of createID bcs of the static keyword
