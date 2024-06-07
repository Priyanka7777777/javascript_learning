// Dates
let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toDateString())

console.log(typeof(mydate));
// to declare new date on our own (A spwcific date)
let mycreatedate = new Date(2023,0,23)
console.log(mycreatedate); // in javascript date start from 0 i.e o->janurary

let mycreatedate1 = new Date(2023,0,23 , 5, 30)
console.log(mycreatedate1) 

let mycreatedata2 = new Date("01-12-2020")
console.log(mycreatedata2)

 // to create time stamp
let mytimestap = Date.now()
 