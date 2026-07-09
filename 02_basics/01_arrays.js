// array

const myarray = [0, 1, 2, 3, 4, 5]                        // Different Ways
const heroes = ["Iron", "Spider", "Hulk"]                 // Of
                                                          // Declaring
const myarray2 = new Array(1, 2, 3, 4, 5)                 // Arrays in JavaScript

// console.log(myarray[0]);


// Array Methods

// myarray.push(6) // Pushes value +> 6 into array
// myarray.push(7)

// myarray.pop() // Pops(Deletes) out last entered value from array +> 7

// myarray.unshift(9) // Adds value to starting of array

// myarray.shift() // Removes value from the atarting of array

// console.log(myarray);


// console.log(myarray.includes(7));
// console.log(myarray.indexOf(5));

// const newarr = myarray.join() // converts array to string

// console.log(myarray)
// console.log(newarr);

//  Slice and Splice

console.log("A ", myarray);

const myn1 = myarray.slice(1,3)

console.log(myn1);
console.log(("B ", myarray));

const myn2 = myarray.splice(1,3)

console.log(myn2);
console.log("C ", myarray);

