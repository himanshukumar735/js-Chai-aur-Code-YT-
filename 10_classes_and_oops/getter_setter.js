class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get password() {
        return this._pass.toLowerCase()     //This function is used to get the password or log in the console
    }

    set password(value) {
        this._pass = value.toUpperCase()    // This function save our password to the data base in uppercase although when client asked to see the we returned a lowercase password as we can see in the above part of getter code
        console.log("The stored password in the database is ",this._pass)
    }

    get email (){
        return this._mail.toUpperCase()
    }

    set email(value){
        this._mail = value
    }

}

const hitesh = new User("hitesh@gmail.com", "AbC")
console.log("The password visible to the user is",hitesh.password)
console.log("The mail visible to the user is",hitesh.email)
