const user={
    username:"sadanand",
    price:10000,
    WelcomeMessage:function (){
        console.log(`${this.username} Welcome to the website`)
        console.log(this)
    }
}

// user.WelcomeMessage()?
user.username="rohit Sharma"
// user.WelcomeMessage()
// console.log(this)?

// function chai(){
//     console.log(this)
// }
// chai()

const chai= function(){ 
    username="shana"
    console.log(this)
}
// chai()


const chai2= () => {   
    // console.log("garam hai")
    let username="dune"
    console.log(this.username)
}