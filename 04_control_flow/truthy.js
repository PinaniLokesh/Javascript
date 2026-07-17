
// const email = "l@gmail.com" // truthy value
// const email = ""            // falsy value
const email = []                // truthy value

if (email) {
    console.log("Got user email");
    
} else {
    console.log("don't have user email");
    
}

// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

//  Truthy values

// true, 1, "0". 'false', " ", [], {} function(){}

// if (email.length === 0) {    // checks if array's lenght is 0/empty
//     console.log("Array is empty");
// }

const emptyobj = {}

if (Object.keys(emptyobj.lenghth === 0)) {   // called object's keys. since object return an array that is why .length prprerty us being used
    console.log("Empty Object");
    
}

// Nullish Coelescing Operator (??) : null undefined // basically avoids assigning null or undefined bvalues 

let val1

// val1 = 5 ?? 10 // ??-> always prints the first value if null or undefined is not present
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? undefined ?? 10 ?? 20 // prints first value assigned after null or undefined


console.log(val1);

// Terniary operator : ?
// condition ? true : false

const teaprice = 100

teaprice >= 80 ? console.log("price is greater than 80") : console.log("Price is less than 80");


