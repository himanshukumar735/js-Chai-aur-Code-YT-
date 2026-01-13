var c = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30  // 30 will be printed even though c is defined as 300 outside
}

// console.log(a);  // it wont be printed because a is defined as local scope variable
// console.log(b);  // it wont be printed because b is defined as local scope variable
// console.log(c);     //c will be printed but not 300. it will be 30. this issue arises bcs of var

// Now let is introduced to fix the above issue

let a = 300  // A is now a global scope variable
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner value of a is", a);
}

// console.log("the value of a will be",a , "not 10");

function one() {
    const username = "Himanshu"

    function two() {
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);  //no
    two()
}

// one()  

if (true) {
    const username = "Hitesh"
    if (username === "Hitesh") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


//                          intoresting

console.log(addone(5))
function addone(num) {
    return num + 1
}



console.log(addTwo(8))
const addTwo = function (num) {
    return num + 2
}
