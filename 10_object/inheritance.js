class User{
    constructor(userName){
        this.userName=userName
    }

    logUser(){
        console.log(`${this.userName}`)
    }
}

const me = new User("sadanad")
me.logUser()

class Teacher extends User{
    constructor(userName , email ,password){
        super(userName)
        this.email=email
        this.password= password
    }

    addCourse(){
        console.log(`A new course is added by the ${this.userName} , teacher`)
    }
}

const fav = new Teacher("max", "max @gmail.com", "max .com ")
fav.addCourse()

fav.logUser()
console.log(fav===Teacher)
console.log(fav instanceof Teacher)
console.log(fav instanceof User)