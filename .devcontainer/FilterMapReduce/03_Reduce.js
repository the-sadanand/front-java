const a=[1,2,3,4,5]

// 1+2+3+4+5

let initalval=0

const SumValue=a.reduce((accumulator,currElements)=> accumulator+currElements,initalval)
console.log(SumValue)

const productVal=a.reduce((accumulator,currElements)=> accumulator*currElements,initalval)
console.log(productVal)

const productValue=a.reduce(function(accumulator,currElements)
{   console.log(`acc: ${accumulator} and curr ${currElements} `)
    return  accumulator*currElements

}
 ,1)
console.log(productValue)
const productValues=a.reduce((accumulator,currElements)=>
{return  accumulator*currElements

}
 ,1)
console.log(productValues)