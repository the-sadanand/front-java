// let myName ="sadanand   "

// console.log(myName.trim().length)

let myHeros = ["thor" , "spiderman"]

let heroPower ={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.sadanand = function(){
    console.log(`sadanand is present in all object`);
}

Array.prototype.heySadanand= function(){
    console.log(`sadanand says hello to all object`)
}

heroPower.sadanand()
myHeros.heySadanand()
// heroPower.heySadanand()

// inheritance 


const User ={
    name:"chai",
    email:"chai@google.com"
}
const Teacher= {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable :false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "chaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True lenths is : ${this.trim().length}`);
}

anotherUsername.trueLength()

"sadanand ".trueLength()
"iceTea".trueLength()

