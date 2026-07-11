const marvel = ["Iron", "Spider", "Thor"]
const dc = ["Super", "Bat", "Flash"]

// marvel.push(dc) // Pushes array into another array

// console.log(marvel);
// console.log(marvel[3][2])

// concat oppeartor

// const all = marvel.concat(dc)
// console.log(all);

// Spread Operator

const all = [...marvel, ...dc]
// console.log(all);

const a1 = [1,2,3,4,[5,6,7],[2,3,1,[7,8,6]]]

const a2 = a1.flat(2)

console.log(a2);

console.log(Array.isArray("Lokesh")); // checks if "Lokesh" is array which is false
console.log(Array.from("Lokesh")); // converts into array => [ 'L', 'o', 'k', 'e', 's', 'h' ]

console.log(Array.from({name : "Lokesh"})); // passes object => output is an empty array []

let a = 100
let b = 200
let c = 300


console.log(Array.of(a, b, c)); // returns new array from set of elements
