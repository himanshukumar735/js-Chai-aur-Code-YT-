//  Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Shaktiman", "Spiderman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4)   // Why () is used here. isnt it wrong?
// console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()  // remove the entitiy present at index 0

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(19));  // we will get the index -1 if the element isnt present in the array

// const newArr = myArr.join()  // join() make the arrray a string by combining all the elements 

// console.log(myArr);
// console.log(newArr);
// console.log(typeof (newArr));


// Slice, Splice (Read the difference between these two)

// console.log("A", myArr);

// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log(myn2);


// By running the above part of code until the comment (above one). Some people might think that the difference between slice and splice and that the index mentioned in slice() is excluded while in splice,it is considered
// But  the real difference (the actual and correct one) is described below

const myn1 = myArr.slice(1, 3)
console.log("A", myArr);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c", myArr);     //Splice just manipulates the original array as we can see from the last console log
console.log(myn2);

console.log("priniting the original designed Array")
console.log(myArr)


// What slice does is that it just remove the elements metioned excluding the last element mentioned in the function but keeps the original array intact.But,
// Splice removes the elements including the second index mentioned in the function and thus change the original array