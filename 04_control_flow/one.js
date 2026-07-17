// If Condition

const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); //Implicit If statement- not recommended

// Nesting If else

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");
    
// }

const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if (userloggedin && debitcard && 2==3) {    // And operator: &&
    console.log("Allow user");
}

if (loggedinfromgoogle || loggedinfromemail) { // Or Operator: ||
    console.log("User Logged In");
    
}

