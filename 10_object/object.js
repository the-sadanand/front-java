function myltiplyby5(num){
    return 5*num;
}

myltiplyby5.power=3;

console.log(myltiplyby5(3))
console.log(myltiplyby5.power)
console.log(myltiplyby5.prototype)

//all thing is prototype 
// prototipal enhiratance
// javaScript have protoypal enhiretance

function createUser(username , score){
    this.username = username
    this.score=score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai =new createUser("chai" , 25)
const tea = createUser("tea"  , 250)

chai.printMe()

