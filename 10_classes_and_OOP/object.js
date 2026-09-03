function multiplyby5(num) {
    return num * 5
}

multiplyby5.power = 2 // Here function is behaving like an object since JS allows it. Power is just a keyword which we have made as a property for this function. We can enter any word instead of power and it will behave same way as a property.

// The key lesson is: JavaScript functions are objects, and normal functions also have a prototype property.
//power is a property you manually added to the function.

// prototype is a special property that JavaScript provides on normal constructor-capable functions and is primarily used when creating objects
console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}
// createUser.prototype.printMe = function () {
    
//     this.score++
//      console.log(`Price is ${this.score}`);
// }
    
createUser.prototype.Increment = function (){
    this.score++
}

createUser.prototype.printMe = function () {
    console.log(`Price is ${this.score}`);
    
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()
tea.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/