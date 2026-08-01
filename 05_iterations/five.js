// For each loop

const coding = ["JS", "Ruby", "Java", "Python", "CPP"]

//forEach calls the callbackfn function one time for each element in the array.
// normal syntax for function :- function function_Name(Parameter) {}
//syntax for callback function :- function (Parameter) {}

// coding.forEach( function (lang) {        //callback function with parameter lang
//     console.log(lang);
    
// })           

// coding.forEach( (val) => {                  // callback function using arrow function
//     console.log(val);
    
// })

// function printme(item){                   // defined a random function
//     console.log(item);
    
// }

// coding.forEach(printme)  //we are giving reference of a function here, we are not executing function like in below line
// coding.forEach(printme()) //executing printme function

// coding.forEach( (val, index, array) => {
//     console.log(val, index, array);  // prints value present in the array, the index of the value aloing with the whole array as well
    
// })

const mycoding = [
    {
        languagename : "Javascript",
        languagefilename : "js"
    },
    {
        languagename : "Java",
        languagefilename : "Java"
    },
    {
        languagename : "Python",
        languagefilename : "py"
    }
]

mycoding.forEach( (Val) => {
    console.log(Val.languagename);
    
})