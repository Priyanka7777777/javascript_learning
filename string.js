const name = "priya"
const repocount = 50

// previous way of string interpolation
 console.log(name + repocount +"Value")

/****MORDEN STRING INTERPOLATION*******/
console.log(`hello my name is ${name} and my repo count is ${repocount}`);


/* STRING DECLARATION USNING OBJECT*****/

const game = new String ('ram_loves_sita');
console.log(game[0])
console.log(game.__proto__);
console.log(game.length);
console.log(game.toUpperCase())
// to find char at index
console.log(game.charAt(2))
// to find index of character
console.log(game.indexOf('r'));

// to do slicing of String
const newString = game.substring(0,4);
console.log(newString)

// we can use Slice and advantage is we can count it from reverse giving value from reverse
const anotherstring = game.slice(-8,4)

// trim -> remove extra space
const newstring = "       priynaka     "
console.log(newstring);
console.log(newstring.trim());

const url = "https://pri.com/hit%20chou"
console.log(url.replace('%20','-'))
//to ask if things there in code or not
console.log(url.includes('priyanka'))
//to covert the string into array and get the value as per desive
console.log(game.split('_'))



