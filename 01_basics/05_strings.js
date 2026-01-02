const name = "himanshu"
const repoCount = 50

// console.log(name + repoCount);    // not recommended

console.log(`Hello my name is ${name} and my repo coumt is ${repoCount}`);

const gameName = new String("Himans-hu-com")    // paste this in console and run gameName keyword

console.log(gameName[0]);
console.log(gameName.__proto__);   // We will get object {} as output


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));  // It shows that at index 4, which character is placed
console.log(gameName.indexOf("h"));  // It shows that at which index h is 

const newName = gameName.substring(0, 4)   // The last index is excluded 
console.log(newName);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    himanshu    "
console.log(newStringOne);
console.log(newStringOne.trim());   // trim() removes the extra white spaces

const url = "https://himanshu.com/himesh%29kumar"  // if we write the link as "https://himanshu.com/himesh kumar" giving space, browser doesnt recognise <space> and replaces it with some numbers like "https://himanshu.com/himesh%29kumar"

console.log(url.replace("%29", "-"));

console.log(url.includes("ram"));   // we are checking whether a string is in the url or not

console.log(gameName.split("-"));   // we get an array and the elements are divided according to the - symbol
