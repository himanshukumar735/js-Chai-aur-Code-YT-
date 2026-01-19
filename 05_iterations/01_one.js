// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 9) {
        // console.log("9 is the lucky number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`inner lopp value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }

}

let MyArray = ["flash", "Batman", "Superman"]

for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    // console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("5 detected");
//         break  // Break exits the loop (for loop) here
//     }
//     console.log(` Value of index is ${index}`);

// }


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 detected");
        continue   // Continue skips the current iteration which is 5 here
    }
    console.log(` Value of index is ${index}`);

}