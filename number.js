const score = 400
console.log(score)
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
// for fixing the vale usually used for taking precision while using ecommerce

console.log(balance.toFixed(2));

/*to take precision->it round off the number when require
*/
const otherno= 123.4567
console.log(otherno.toPrecision(4))

const hundreds = 100000
console.log(hundreds.toLocaleString())

//***MATHS************* */

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.8))
console.log(Math.ceil(4.22))
console.log(Math.floor(4.9))
console.log(Math.min(3,7,9,0 ,12 ))
// random gives values from 0-1 
console.log(Math.random());
console.log((Math.random()*10)+1);

const min = 10
const max = 20
 console.log(   Math.floor(Math.random()*(max-min+1))+ min)

















