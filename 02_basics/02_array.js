console.clear()
const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const mine_heros = ["Dipanshu", "Priyanshu", "Himanshu"]

// marvel_heros.push(dc_heros)   // The dc_hero array is pushed into the marvel_hero but not as an array rather than an element which is verified by the length () below. Also push() changes the existing array bsc of its mutability nature and thus return a new array

// console.log(marvel_heros);
// console.log(marvel_heros.length);
// console.log(marvel_heros[3]);   // This shows that the dc_hero which was initialised as an array is now an element inside the marvel_hero array
// console.log(marvel_heros[3][2]);   // to extract individual element from the internal or subarray

const allHeros = marvel_heros.concat(dc_heros, mine_heros)  // concat () combines multiple array into one new array without modifying any existing array which is proved by using length()
// console.log(allHeros);
// console.log(allHeros.length);
// console.log(allHeros[8]);

const all_new_heros = [...marvel_heros, ...dc_heros, ...mine_heros]    // spread() works with string literals etc but concat() works with array only. Although both doesnt modify the original array unlike push()
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)   // giving exact number of depth is recommended
// console.log(real_another_array);

// console.log(Array.isArray("Himanshu"));   // false
// console.log(Array.isArray([11, 22, 33, 44, 55]));   // true
// console.log(Array.from("Himanshu"));  // made the array of the string character
// console.log(Array.from({ Name: "Himanshu" }));   // Returns an empty array

// console.log(Object.keys({ Name: "Himanshu", Course: "BCA", Roll: "245UCA026" }));   // Returns array with keys
// console.log(Object.values({ Name: "Himanshu", Course: "BCA", Roll: "245UCA026" }));   // Returns array with values

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
