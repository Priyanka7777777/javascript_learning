/* based on accessing the memory and way of storing the data
the datatype is of two tye:
primitve-> These are call by value (7 types: String, Number, Boolean,null,undefined,symbol,BigInt 

***Dynamic type***
    
nonprimitive->these are call by reference : Array, Objects, Functions
*/

//to declare SYMBOL-->sybol used to declare unique value
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id===anotherid)
//add n to declare bigint

const bignumber = 67899887654566n
/*****************non primitive********* */
//ARRAY DECLARATION
const heros = ["ram","hari"]

//objects declaration
let myobject ={
    name: "priyanka",
    age: 23,

}
// DECLARATION OF FUNCTION AS VARIABLE
const muFunction = function(){
    console.log("hello world")
}

//https://262.ecma-international.org/5.1/#sec-11.4.3


/************TYPE OF MEMORY************
STACK(primitive), whenwhere we declare another variable we get copy of value of it when variable are stored in stack

HEAP (non primitive) , we get reference of variable when we have variable stored in heap
*/
let myyoutube = "ramshyam"
let anothername = myyoutube ;
anothername = "tom";
console.log(anothername);
console.log(myyoutube);

// 

let userone = {
    email: "user@gmail.com",
    upi:"user"

}
let usertwo =userone
usertwo.email = "priyanka@gmail.com"
console.log(userone.email);
console.log(usertwo.email);

