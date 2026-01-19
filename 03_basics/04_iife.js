// Immediately Invoked Function


function chai() {
    console.log(`DB CONNECTED`);
}
// chai()


(function chai() {      //Named IIFE
    console.log(`DB CONNECTED`);
})();   // ()() the first () is used to wrap the function and the second () for function call
       //  To run the bottom arrow function which dont have name. ; needs to be applied(explicitly) to terminate the function
// Why IIFE is used --- to get rid of pollution caused by global scope variable?

(           //IIFE with no name
    () => {
        console.log(`DB CONNECTED TWO`);
    }
)();

(
    (name) => {      // name is argument
        console.log(`DB CONNECTED TWO ${name}`);
    }
)('himanshu')           // himanshu is parameter here