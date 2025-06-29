// map function


// let arr=[1,4,6,778,7,6,5,43,456,7,8,9,6]
// arr=arr.map((num)=>num+arr[1])
// console.log(arr)

// const newArr=arr.map((num)=> num%2==0)
// console.log(newArr)
 /*[
  false, true,  true,
  true,  false, true,
  false, false, true,
  false, true,  false,
  true
] */

// const newArr3=arr.filter((num)=> num%2==0)
// console.log(newArr3)
/*[
    8, 10, 782, 10,
  460, 12,  10
]*/

//  >>>.... chaining .....<<<<<<

// arr.map().map().filter()

let B=[2,3,5,67,8,9,9,7,8,6,43]
const C=B.map((num)=> num%2==0).map((value)=>{
    return value===false?true:false
}).filter((value)=> value===false)
console.log(C)