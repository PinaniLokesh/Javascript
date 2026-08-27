// Promise is an object in Javascript which represents wither completion or failure of an asynchronous event

const promiseOne = new Promise(function(resolve, reject) {
 // Do an Async task
    // DB calls like cryptography callls or network calls
    setTimeout(() => {
        console.log("Async task completed");
        resolve()    //resolve is called
    }, 1000)
})  //definition

promiseOne.then(() => {
    console.log("Promise consumed");
    
})             //.then() has a connection with resolve

//another way to write promise without declaring it in a variable

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2");
        resolve()
    }, 1000);
}).then(() => {
    console.log("Async Task 2 completed");
    
})

const promiseThree = new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve({username: 'Lokesh', email: 'lokesh@example.com'}) // we can pass an object or an array inside resolve and since it has direct connection with .then() therefore below user output will be an object passed here
   }, 1000)
})

promiseThree.then((user) => {
console.log(user); // output is an object passed above in resolve : { username: 'Lokesh', email: 'lokesh@example.com' }

})

const promiseFour = new Promise((resolve, reject) => {
      setTimeout(() => {
        let error = false
        if (!error) {
            resolve({username: "Lokesh", password: "1234"})
            
        }
        else{
            reject('Error: Something went wrong')
        }
      }, 1000)
})

promiseFour.then((user) => {  //here .then establishes connect with resolve so all its parameters can be accessed here
    console.log(user);
    return user.username // we return username to be recalled again when below .then
}).then((username) => { // now we can access username with .then
    console.log(username);
    
}).catch((err) => { // .catch establishes connection with reject
  
    console.log(err);
    
}).finally(() => { // .finally is used to complete the promise stage
    console.log("Promise completed finally");
}) 

// Async and Await

const promiseFive = new Promise((resolve, reject) => {
      setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "JavaScript", password: "1234"})
            
        }
        else{
            reject('Error: JS went wrong')
        }
      }, 1000)
})

async function consumepromiseFive() {  //async syntax
//     const response = await promiseFive
//     console.log(response);
    
// }
try {                                        //similar to then and catch
    const response = await promiseFive
    console.log(response);

} catch (error) {
    console.log(error);
    
}
}
consumepromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))