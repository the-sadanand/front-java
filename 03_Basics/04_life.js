// iffe : immediately invoked function expresssion

// to excute the function immediately
// This is a common pattern in JavaScript to create a scope and avoid polluting the global namespace.
// It is often used to encapsulate code and avoid variable conflicts.
(function() {
    console.log("This is an IIFE");
})();

// (functiondefination)
                    // (functioncall)

(function chai(){
    console.log("chai jaldi banao")
})();//colon is neccessary sometime

(()=>{console.log("chai jaldi banao")})();//colon is neccessary sometime

((name)=>{
console.log(`chai jaldi banao ${name}`)})("sadanand");//colon is neccessary sometime
