/* example one */

// const promiseOne=new Promise(function(resolve,reject){
//     // do an async task : db call , cyprotography, network
//     setTimeout(() => {
//         console.log("promise one created")
//          resolve() // resolve execute hoga tab connect hoga .then se
//         // reject()
//     },2000);
// })

// promiseOne.then(function (){
//     console.log("promise consumed")
// })
// promiseOne.catch(function(){
//     console.log("promise got some error")
// })

// example 2.........................................
// new Promise(function(resolve,reject){
//     setTimeout(() => {
//        console.log("Promise two created")
//     }, 2000);
//     resolve()
// }).then(function(){
//     console.log("Promised 2 consumed")
// })
// .then(()=>console.log("hello at second .then"))

// Example 3 ........................................

// new Promise(function(resolve,reject){
//     let khatam=null;
//    khatam=setTimeout(() => {
//        console.log("Promise two created")
//     }, 2000);/* khatam me setTimeout function exact time par chala gaya hai bas oo 2sec badd execute hoga*/
//     console.log(khatam)
//     if(khatam!==null) resolve()
// }).then(function(){
//     console.log("Promised 2 consumed")
// })
//  .then(()=>console.log("hello at second .then"))

/* Example 4 >>>>>>>>>>>>>>>>>> */

// const promiseFour= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("created Promise Four");
//         resolve(/*parameter:function,object,array*/{user:'sadanand' , title: 'prasad'}, [0,1,2,4,5,3,5])
//     },2000)
// })

// promiseFour.then(function(user){
//     console.log(user);
//     console.log(user.title+" "+user.user);
//     console.log(user.title, user.user)
//     console.log(`User name is ${user.user} user title is ${user.title}`)
// })

// example 5 >>>>>>>>>>>>>>>>>>>>>>>>>

// const promiseFour = new Promise(function (resolve, reject) {
//   let error = true; /* change to false <->ture for check */
//   setTimeout(function () {
//     if (!error) {
//       resolve({ userName: "sada", email: "sada123@" });
//     } else {
//       reject("some error happened");
//     }
//   }, 2000);
// });

// const username=promiseFour.then(function(user){
//     console.log(user)
//     return user.userName;/* this type return and saving value in a variable will not work */
// })

// console.log(username)

/* so here chaining comes in role  */

// promiseFour
//   .then(function (user) {
//     console.log(user);
//     return user.userName; /* this value go to further next then */
//   })
//   .then(function (u) {
//     console.log(u);
//   })
//   .catch(function (error /* name as you like */) {
//     console.log(error);
//   }).finally(()=>console.log('The promise is either resolved and rejected'))


/* example 5....................... */

// const promisefive= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({userName:'sada',password:'123sada'})
//         }
//         else{
//             reject(`your password  is wrong`)
//         }
//     },2000)
// })
/* Async await can't handle error directly */
//  async function asyncAwait(){
//     const response= await promisefive
//     console.log(response)
// }

// async function asyncAwait() {
//     try {
//         const response = await promisefive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// asyncAwait()



///new one example  



async function getallUsers() {
    try {
        // ...existing code...
       const response = await fetch('https://jsonplaceholder.typicode.com/users')
      // ...existing code...
        // console.log(response);
        const data = await response.json() /* .json() to convert in json , 'also need time' */
        console.log(data)
    } catch (error) {
        console.log("E:" ,error)
    }
}

// getallUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{return response.json()})
.then((data)=>{console.log(data)})
.catch(()=>console.log(error))