//immediately invoked function expressions(iife)
//->ye hum use karte hai global scope ke pollution ko hatane ke use karte hai
// ye bhi kah sakte hai ki function ko immediate execute karne ke liye use karte hai

//syntex
//named IIFE
(function chai() {
  console.log(`DB CONNECTED`);
})();
//semicolon use to end the iife

//we can also use arrow function
//unnamed IIFE
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");
