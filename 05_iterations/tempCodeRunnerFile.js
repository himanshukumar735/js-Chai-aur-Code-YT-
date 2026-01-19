const map = new Map()   // map is an object which stores "key", "Value" pair. It stores unique key value
map.set('IN', "INDIA")
map.set('USA', "United States of America")
map.set('FR', "FRANCE")
map.set('FR', "FRANCE")

console.log(map);

console.log("Key-Value will be printed not only the key");

for (const key of map) {
    console.log(key);
}