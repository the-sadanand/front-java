const cat=document.getElementById('cat')
// cat.addEventListener('click',(e)=>{
//    alert('cat');
//    console.log(e)
   
// },false /* true  event Capturing*/)

//  event bubbling and event Capturing
// bubbling :- bottom to top here li to ul
// capturing(true):- top to bottom here ul to li 

// 

/* segment 2 */

document.querySelector('#images').addEventListener('click',function(event){
  /*  console.log(event.target)

    console.log(event.target.parentNode)
    console.log(event.target.parentNode.parentNode)
    console.log(event.target.parentNode.parentNode.parentNode)
    console.log(event.target.parentNode.parentNode.parentNode.parentNode)
    console.log(event.target.parentNode.parentNode.parentNode.parentNode.parentNode)
    console.log(event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode) */
  let removeIt = event.target.parentNode
    // removeIt.parentNode.removeChild(removeIt)
//   removeIt.remove() //this is also true
    console.log(event.target.tagName)
    if(event.target.tagName==='IMG'){
        removeIt.remove()
        alert(`${event.target.id} deleted`)
    }
      

/* without if condition it will remove taget parent if list clicked it will remove whole ul so only remove particul image li , condition is required */

},false)