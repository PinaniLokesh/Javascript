
let a = 300   // Global scope

if (true) {               // block scope
let a = 10
const b = 20
// console.log(a);

// var c = 30  // Var datatype is not to be used since it does not follow scope properties
}
// console.log(a);
// console.log(b);
// console.log(c);

////////////////Nested Scope

function one() {
    const username = "Lokesh"
    
    function two() {
        const website  = "Google.com"
        console.log(username);
    }
//   console.log(website);
  
  two()
}

one()

if (true) {
    const username = "Lokesh"
    if (username === "Lokesh") {
        const website = " Google"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// +++++++++++++++++Interesting topic

console.log(addone(5))  /// there was no error since a function was defined normally

function addone(num){
    return num + 1
}

addtwo(5)                   // gives error as here we are calling function since it is initialised inside a variable

const addtwo = function(num){       // declared function inside a variable(expression)
    return num + 2
}

