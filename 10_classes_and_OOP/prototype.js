let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getspiderpower : function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.lokesh = function(){       //This means all objects that inherit from Object.prototype can access lokesh().
    console.log("Lokesh is present everywhere");
    
}

Array.prototype.saylokesh = function(){    //we assigned a prototype saylokesh for all the arrays
    console.log("lokesh says hello");
    
}

heroPower.lokesh()
myHeroes.lokesh()
myHeroes.saylokesh()
// heroPower.saylokesh()  // Since this is an object so it cannot access arrays prototype

//Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()