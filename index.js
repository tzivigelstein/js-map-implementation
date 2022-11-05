const CustomMap = require("./CustomMap");

const map = new CustomMap();

map.set("a", 2);
map.set("b", 12);
map.set("c", 290);

const iterator = map.entries();

const cb = (key, value) => {
  console.log(`m[${key}] = ${value}`);
};

map.forEach(cb); // m[a] = 2, m[b] = 12, m[c] = 290

map.get("a"); // 2
map.has("b"); // true

console.log(iterator.next().value); // [ 'a', 2 ] Returns the first entry
console.log(map.keys().next().value); // 'b' Returns the next key for the entry ['b', 12]
console.log(map.values().next().value); // 290 Returns the next value for the entry ['c', 290]
