
function SayMyName(){   // Declaring a function
    console.log("L")
    console.log("O");
    console.log("K");
    console.log("E");
    console.log("S");
    console.log("H");
}

// SayMyName // Referrence

// SayMyName() //Syntax for executing a function

// function AddTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// AddTwoNumbers(2, 5)

function AddTwoNumbers(number1, number2){
    // let result = number1 + number2
    //  return result
    return number1 + number2
}

const result = AddTwoNumbers(3, 6)
// console.log("Result: ", result);

function userloginmessage(username = "Sam"){
// if(username === undefined){
//     console.log("Enter correct uername");
//     return
// }
if(!username){          // equavalent to username === undefined
    console.log("Enter correct username");
    return
}
    return `${username} just logged in`
}

console.log(userloginmessage("Lokesh"));
console.log(userloginmessage("")); // Empty strings are falsy therefore If statement becomes true
console.log(userloginmessage()); // Output is undefined so If statemnent is true

