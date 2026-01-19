const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (val) {     // Just remove function_name from the standard function syntax :- function function_name (parameter){}
    // console.log(val);
})

coding.forEach((item) => {          // just remove function name from the standard syntax of arrow function function_name = (parameter) => {}
    // console.log(item);
})

function printMe(item) {
    console.log(item);
}

// coding.forEach(printMe)         // We just need to give the reference not the whole function itself. thatswhy we wrote "printMe" not printMe()

coding.forEach((item, index, array) => {       // foreach loop can take index and the whole array as the parameter
    console.log(item, index, array);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})