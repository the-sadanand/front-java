// ES 6

class User{
    constructor(userName , email, password){
        this.userName=userName
        this.email=email
        this.password=password
    }

    encrpytPassword(){
        return `${this.password}abc`
    }

    normalUserName(){
        return `${this.userName.toUpperCase()}`
    }
}

const chai = new User("chai","chai@gmail.com" , "332@");

console.log( chai.encrpytPassword())
console.log(chai.normalUserName())


// behind the scene

function user(Username, email, password){
    this.Username=Username
    this.email = email
    this.password = password
}

user.prototype.encrpytPassword = function(){
    return  `${this.password}abc`
}

// ....