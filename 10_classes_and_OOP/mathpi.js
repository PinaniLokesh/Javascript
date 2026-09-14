// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);   // Math.PI value is contant cannot be changed

const descripter = Object.getOwnPropertyDescriptor(Math, 'PI') // we can check the properties of Math.Pi where writable is false, therefore Math.Pi value cannot be changed

// console.log(descripter);

const chai = {
    name : "Ginger Tea",
    Price : 250,
    IsAvailable : true,

    function() {
        console.log("Chai nhi bani");
        
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// How to edit properties of an object and aletr it

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true
})

for (const [key, value] of Object.entries(chai)) {
    if (typeof value != 'function') {
        console.log(`${key} : ${value}`);
        
    }
}