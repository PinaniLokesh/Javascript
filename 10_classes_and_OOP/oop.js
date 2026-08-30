const user = {                 //object literal
    username: "Lokesh",
    loggedIn: 8,
    signedIn: true,

    gotuserdetails: function(){
        // console.log("Got user details from database");
    //   console.log(`Username: ${this.username}`);
    console.log(this);
    
        
    }
}

// console.log(user.username);
// console.log(user.gotuserdetails());


// const promiseOne = new Promise()   //Constructor Function 
// const date = new Date()

function User(username, loggedIn, signedIn) {
    this.username = username;
    this.loggedIn = loggedIn;
    this.signedIn = signedIn;

    return this
}

// const userOne = User("Lokesh", 8, true)
// const userTwo = User("Lokesh2", 10, false)

// console.log(userOne); // Here in UserOne userTwo values are replaced with original values in the output. Therefore we use new keyword

const userOne = new User("Lokesh", 8, true)
const userTwo = new User("Lokesh2", 10, false)

console.log(userOne);
console.log(userTwo);

