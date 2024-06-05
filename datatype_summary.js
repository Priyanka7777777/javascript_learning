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