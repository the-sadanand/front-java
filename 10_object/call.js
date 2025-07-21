function setUsername(username){
    // complex DB calls
    this.username=username
    console.log("called")
}

function createUser(username , email , password){
    // setUsername(username) in this synatax call stack problem arises so,
    setUsername.call(this , username) // hold the reference

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com" , "123")

console.log(chai)