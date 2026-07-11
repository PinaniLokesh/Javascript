//  Objects using Constructor // SIngleton

// const tinderuser = new Object() // singleton object
const tinderuser = {} // non-singleton object
tinderuser.id = ("123abc")
tinderuser.name = ("Sammy")
tinderuser.isloggedin = false
// console.log(tinderuser);

const regularuser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firtsname: "Lokesh",
            Lastname: "Pinani"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firtsname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2) // copies assign object from source to target object

const obj3 = { ...obj1, ...obj2} // Spread operator
//  console.log(obj3);

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isloggedin'));

// Destructuring Objects

const course = {
    coursename: "JS",
    price: 555,
    instructor:"ABC"
}

// console.log(course.instructor) // Prints Instructor value
const {instructor : ins} = course  // stores instructor value in Ins

// console.log(instructor);  
console.log(ins);

