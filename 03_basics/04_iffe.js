//  Immediatly Invoked Function Expression (IFFE)

// When you want to iommediatly execute function after declaring it without any global variables to pollutre the function, we use IFFE method

// function DB(){
//     console.log("DB Connected");
              
// }

// DB()         // Normal function

// IFFE Function

// (function DB(){
//     console.log("DB Connected"); // wrapped Function inside () Paranthesis
    
// }())                        // Old mehtod


(function DB(){    // Named IFFE
    console.log("DB Connected"); // wrapped Function inside () Paranthesis
    
})(); // () => Function calling Also ; is used to end function

// Named IFFE

( (name) => {                                    // Using Arrow function
    console.log(`DB Connected Two ${name}`);     
    
})('lokesh');