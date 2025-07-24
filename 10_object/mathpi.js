const descriptor= Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor)
console.log((Math.PI))
console.log(Math.ceil(Math.PI))
/*output
 {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}*/

const descriptor1= Object.getOwnPropertyDescriptor(Math,"random")
console.log(descriptor1)

const chai = {
  name :'ginger chai',
  price :250,
  isAvilable : true,
  orderChai: function(){
    console.log("chai nahi bani")
  }
}

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
console.log(Object.getOwnPropertyDescriptor(chai,'price'))
console.log(Object.getOwnPropertyDescriptor(chai,'isAvilable'))
console.log(Object.getOwnPropertyDescriptor(chai,"oredrChai"))
// Object.defineProperties(chai,'name',{
//   Writable:false,
//   enumerable:false
// })

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (let [key , value] of Object.entries(chai)){
  console.log(`${key}:${value}`)
}

