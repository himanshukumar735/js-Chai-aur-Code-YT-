const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (accumulator, currentValue) {
//     console.log(`Accumulator: ${accumulator} and currrentValue: ${currentValue}`);
//     return accumulator + currentValue
// }, 0)

const myTotal = myNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 299
    },

    {
        itemName: "Python Course",
        price: 999
    },

    {
        itemName: "MobileDev Course",
        price: 5999
    },

    {
        itemName: "Data Science Course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((accumulator, item) => accumulator + item.price, 0)

console.log(priceToPay);
