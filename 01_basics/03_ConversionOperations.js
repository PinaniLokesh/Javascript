let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let value= Number(score) //converted above value stored in score which is string to number
// 'Number' is a dataype

console.log(typeof value);
console.log(value); //NAN is printed since 33abc is Not A Number(NaN) but still datatype was converted from string to Number. Value remained NaN

let Isloggedin = 1 // passes as number

let BooleanIsLoggedIn = Boolean(Isloggedin) // converted to boolean and since true=1 in boolean it is showing true

console.log(BooleanIsLoggedIn);

let number = 33

let stringNumber = String(number)

console.log(stringNumber);
console.log(typeof(stringNumber));
