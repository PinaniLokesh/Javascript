// for of loop

const arr = [1,2,3,4,5,6]

for (const i of arr) {
    // console.log(i);
    
}

const greetings = "Hello World!"

for (const greet of greetings) {

    if(greet === " "){
        // console.log("Space Encountered");
        // break   // exits the loop completly and only Hello is printed
        continue   // Skips space and prints rest all the characters
        
    }

    // console.log(`Each Char is ${greet}`);
    
}

// Maps : they are objects which hold key value pairs. they hold unique values and in order which they are stored they are returned in same order

const map = new Map()
map.set('IN', "India")
map.set('Fr', "France")
map.set('Chi', "China")
map.set('IN', "India") // DUplicate value does not get stored in Maps

// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-', value);
    
}

const myObj = {
    Game1 : 'Resident Evil',
    Game2 : 'Far Cry',
    Game3 : 'Call Of Duty'
}

console.log(myObj);

// for (const Game of myObj) { // object is not iterable means object values cannot be stored in 'Game'
    // console.log(Game); 
    
// }
