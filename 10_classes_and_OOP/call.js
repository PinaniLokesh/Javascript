function setUsername(username) {
    // Db calls
    this.username = username
    console.log("called");
    
}

function createUsername(username, email, password) {
   setUsername.call(this, username) // .call lets one function borrow another function's this context. here, setUsername functions username is getting borrowed

    this.email = email
    this.password = password
}

const user = new createUsername("Lokesh", "lokesh@fb.com", "1234")
console.log(user);
