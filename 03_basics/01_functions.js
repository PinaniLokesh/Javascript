
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

// console.log(userloginmessage("Lokesh"));
// console.log(userloginmessage("")); // Empty strings are falsy therefore If statement becomes true
// console.log(userloginmessage()); // Output is undefined so If statemnent is true

function calculatecartprice(value1, value2, ...num1){ // (...) => is a rest operayor also known as spread operator and is termed as rest or spread dependoing upon use case
    return num1
}

// console.log(calculatecartprice(5, 10, 20, 30)); // returns values inside an array []
// 5 takes value1, 10 takes value2 and 20 and 30 are stored as array in num1

const user = {
 username : "Lokesh",
 Price : 100
}

function callanobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.Price}`);
    
}

// callanobject(user)
callanobject({                 //passing opbject inside a function call
    username : "SAM",
    Price : 200
})

const myarray = [10,20,30,40]   //decalred an array
function secondarray(getarray){
    return getarray[2]                   //passes an array in function
}

console.log(secondarray(myarray));     // prints array inside a function

console.log(secondarray([10,20,50,40])); // passes array inside a function call

