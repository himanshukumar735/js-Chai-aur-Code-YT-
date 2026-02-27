// let myName = "Hitesh    "
// let myChannel = "chai   "

// console.log(myName.trim().length)    // Ye to phir low iq wali baat ho gyi as sir said
// console.log(myName.truelength)       // we want to make a function which gives the true length of the string

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function () {
    console.log(`Hitesh is present in all objects`)
}

Array.prototype.heyHitesh = function() {
    console.log("Hitesh says hello")
}

heroPower.hitesh()
myHeroes.hitesh()
myHeroes.heyHitesh()
// heroPower.heyHitesh()   //Obviouslly error will come as we have gave the access of "heyHitesh" to our array only



// Inheritance

const User = {
    name:"chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport      //giving the properties of TeachingSupport to the TASupport
}

Teacher.__proto__User = User    // giving the properties of user to the teacher

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)     // Teaching support access the features of teacher

let anotherUserName = "chaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength()
"hitesh".trueLength()