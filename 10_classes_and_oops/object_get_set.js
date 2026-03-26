// Another way to use or define the getter and setter using object when class was not available bcs getter and setter is provided by the class
const User = {
    _email: "h@hc.com",
    _password: "abc",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const tea = Object.create(User)     // We are creating an object on the behalf of user and storing it into the tea variable
console.log(tea.email)
