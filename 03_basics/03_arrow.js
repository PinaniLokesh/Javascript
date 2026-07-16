const user = {
    username : "Lokesh",
    price : 999,

    welcomemsg: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomemsg()
// user.username = "Sam"
// user.welcomemsg()
// console.log(this); // No object found henc eshowing empty object {}

function one(){
    let name = "Lokesh"
    console.log(this.name); // this can only be used in object to use its properties it will not work for function
    
}

// one()

//++++++++++++++++++++Arrow Function

// Syntax: () => {}

    // const addtwo = (num1, num2) => {
    //  return num1 + num2
    // }

// const addtwo = (num1, num2) => num1 + num2 // Implicit return
    // const addtwo = (num1, num2) => (num1 + num2) // if you use {} then you will have to use return keyword 

const addtwo = (num1, num2) => ({username: "Lokesh"})  // declaring object implicitly inside a function

    console.log(addtwo(3, 4))