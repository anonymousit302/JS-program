var name1 ;
var name2 ;
var name3 ;

var countries = ["India","Paris","nepal","butan"]

var states =  new Array("goa","Delhi","mumbai")
console.log(states[0])
console.log(states.length)
states[0]="maharashatra"
console.log(states)

var user = ["abc","abc@gmail.com",3,34,true]
// console.log(user)
user.pop()
// console.log(user)
user.unshift("New user name is golang")
// console.log(user)
user.shift()
console.log(user)
console.log(user.indexOf(3))
console.log(Array.from("abc"))
 
/*
function isEven(element){
    // if (element %2 === 0){
    //     return true
    // }
    // return false
    return element % 2 === 0;
} */
var isEven = (element) => {

    return element % 2 === 0;
}
// console.log(isEven(4))

//Every perfrom operation on each element and give combine result 
// var result = [2,3,6,8].every(isEven)
// console.log(result)


//callback function 
var result = [2,4,6,8].every((element)=>(element%2 === 0 ));
console.log(result)
//if we want to return value in call back function we need {}
var result = [2,3,3,8].every((element)=>{
    return element%2 === 0;
})
console.log(result)
