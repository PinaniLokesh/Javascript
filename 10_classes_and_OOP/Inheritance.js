class user{
 constructor(username){
    this.username = username
 }

 loguser(){
    console.log(`Username is ${this.username}`);
 }
}

class Teacher extends user{    // Inherits or makes connection with both the classes. Here Teacher is child of Parent class user
    constructor(username, email, password){
        super(username)// super keyword is used to access parent class here it is being use to get username from parent class user
        this.password = password
        this.email = email
    }
  AddNewCourse(){
    console.log(`New Course has been added by ${this.username}`);
    
  }
}

const Loki = new Teacher("Loki", "loki@loki.com", "123456")

Loki.AddNewCourse()
Loki.loguser()  // Since Teacher is child of class user, therefore teacher can access all functions inside its parent class but vice versa is not true

