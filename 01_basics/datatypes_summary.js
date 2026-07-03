//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["Iron" , "Spider", "Thor"]; //Array

let Myobj ={
    name: "Lokesh",
    Age: 28,
} // Object

const myfunction= function(){
    console.log("Hello World")
} //Function

//******************************************************************************* 

// Types of Memories
//  Stack : Used for Primitive datatypes
//  Heep: Used for Non-Primitive datatype

let myyoutubename = "Lokeshdotcom"

let anothername = myyoutubename
anothername = "Goludotcom"

console.log(anothername);

console.log(myyoutubename);

let userone = {
    email : "abc.com",
    upiId : "abc.ybl"
}

let usertwo = userone

usertwo.email = "xyz.com"

console.log(userone.email)

console.log(usertwo.email)