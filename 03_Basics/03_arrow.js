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


// const chai2= () => {   
//     // console.log("garam hai")
//     let username="dune"
//     console.log(this.username)
// }


// chai2() // undefined

// const chai3= () => {
//     console.log(this)
//     console.log(this.username)
// }       

const sum= (a,b) => {
    return a+b
}

// console.log(sum(10,20)) // 30  
const addTwo=(a,b) =>(a+b) 
console.log(addTwo(10,20)) // 30 