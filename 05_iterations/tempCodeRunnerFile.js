
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => num > 4)     // The difference between this filter and forEach is that filter returns the value
// console.log(newNums);

const newNums = myNums.filter((num) => {
    num > 4
})
console.log(newNums);