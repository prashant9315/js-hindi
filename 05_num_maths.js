const balance = new Number(100);

// console.log(balance.toString().length); //this will change the number in string and give its length

// console.log(balance.toFixed(2)); //IT WILL GIVE output upto 2 digits after decimal

// console.log(balance.toPrecision(3)); //it will precise the number  in 3 digits
// //23.8966=>23.9
// //123.896=>124
// //1123.896=>1.12e+3

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));//THIS WILL convert 100000 into 10,00,000

//++++++++++++++++++++++++maths++++++++++++++++++++++++++++

console.log(Math);
// console.log (Math.abs(-4));//will give positive value
// console.log (Math. round (4.6)); //round off
// console. log (Math.ceil(4.2)); //will give top integer value
// console. log (Math. floor (4.9));//will give lower integer value
// console. log (Math-min(4, 3, 6, 8)); //will give min
// console. log (Math.max (4, 3, 6, 8));//will give max

console.log(Math.random()); //random value from 0 to 1
console.log(Math.random() * 10 + 1); //random value from 1 to 9
console.log(Math.random() * 10 + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //random value from 10 to 20
