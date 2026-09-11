
class user{
    constructor(username, email, password){
        this.username = username;
        this.password = password;
        this.email = email
    }

    encryptpassword() {
        return `${this.password}abc`
    }
    changeusername() {
        return `${this.username.toUpperCase()}`
    }
}

const Lokesh = new user("Lokesh", "l@anc.com", "123")

console.log(Lokesh.encryptpassword());
console.log(Lokesh.changeusername());
console.log(Lokesh);

// If Class was not there then we can perform above operation using function as well

function User(username, email, password){
        this.username = username;
        this.password = password;
        this.email = email
    }

    User.prototype.encryptpassword = function(){
        return `${this.password}abc`
    }

    User.prototype.changeusername = function(){
        return `${this.username.toUpperCase()}`
    }

    const Loki = new User("Loki", "loki@anc.com", "567")

console.log(Loki.encryptpassword());
console.log(Loki.changeusername());
console.log(Loki);