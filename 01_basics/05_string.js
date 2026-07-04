const name = "Lokesh"

const count = 10

// console.log(name + count + " Value"); Not recommended syntax for coding in modern days

console.log(`Hello! my name is ${name} and my count is ${count}`);

const gamename = new String("Lokesh-98-94")

console.log(gamename[0]);
console.log(gamename.__proto__);


console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('k'));

const newstring = gamename.substring(0, 4)
console.log(newstring);

const anotherstring = gamename.slice(-8, 4)
console.log(anotherstring);

const secondstring = "    lokesh    "

console.log(secondstring)
console.log(secondstring.trim());

const url = "https://lokesh%20Pinani"
console.log(url.replace('%20','-'));

console.log(url.includes('lokesh'));
console.log(url.includes('pooran'));

console.log(gamename.split('-'));
