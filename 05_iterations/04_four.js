// forin -> index/keys
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

console.log("Keys will be printed now");
for (const key in myObject) {       // This is forin loop with if loop excluded from its original syntax
    console.log(key);
}

console.log("Value will be printed now");
for (const key in myObject) {
    console.log(myObject[key]);
}

console.log("keys along with its value will be printed now");
for (const key in myObject) {
    console.log(`${key} is the shortcut for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(key);   // we will get keys only and by keys we mean index
}

console.log("we will get  value now using for in loop");
for (const key in programming) {
    console.log(programming[key]);   // we will get  value by the keys or index
}

const map = new Map()   // map is an object which stores "key", "Value" pair. It stores unique key value
map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('FR', "FRANCE")
map.set('FR', "FRANCE")

for (const key in map) {
    console.log(key);
}