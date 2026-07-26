// For In loop

const myobj = {
    js : 'JavaScript',
    CPP : 'C++',
    rb : 'Ruby',
    Swift : 'Swift by Apple'

}

for (const key in myobj) {
  
    // console.log(`${key} is shortcut for ${myobj[key]}`);
    
}

const arr = ["Js", "C++", "Ruby"] // array defined

for (const num in arr) {
    
//  console.log(num); // Prints keys of array means position of each value in array like 0th posiution, 1th position
//  console.log(arr[num]); // Prints values
 
}

// const map = new Map()              //Map is not iterable using for in loop
// map.set('IN', "India")
// map.set('Fr', "France")
// map.set('Chi', "China")
// map.set('IN', "India") // DUplicate value does not get stored in Maps

// for (const key in map) {
    
//     console.log(key);
    
    
// }

