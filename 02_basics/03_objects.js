//  Objets are declared in 2 ways:
// 1. Lterals 2. Constructors
// Singleton : when object is created using Constructor it is known as singleton object which is a unique object.
// Object.create

// Objects using Literals

const mysym = Symbol("key1") //Declares a symbol

 const Jsuser = {
  name: "Lokesh",
  "full name": "Lokesh Pinani",
  age: 28,
  [mysym]: "myKey1", // passes symbol in object body
  email: "lokesh@gmail.com",
  IsloggedIn: false,
  LastLoginDays: ["Monday", "Saturday"]
 }  // object declared

//  console.log(Jsuser.email);
//  console.log(Jsuser.name);
//  console.log(Jsuser[mysym]);
//  console.log(Jsuser["full name"]); //best way to print for object - always use [] instead of .

Jsuser.email = "lokesh@google.com"
// Object.freeze(Jsuser) // freezes an object so values cannot be altered
Jsuser.email = "lokesh@yahoo.com" // does not alter email since object has been freezed
// console.log(Jsuser);

 Jsuser.greeting = function(){
    console.log("Hello JS User")
 }

 console.log(Jsuser.greeting());

  Jsuser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`) //String interpolation 
 }
 
 console.log(Jsuser.greetingTwo());
 