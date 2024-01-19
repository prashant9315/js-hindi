const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumers.map((num) => num + 10);
console.log(newNums);
//map is same as filter it returns values

//IMPORTANT
//filter me hame condition check karni hoti hai tab wo return karta hai but map me start se end tak iterate hota hai

//we can do chaining also------------>

const newNums1 = myNumers
  .map((nums) => nums * 10)
  .map((nums) => nums + 1)
  .filter((nums) => nums > 40);

console.log(newNums1);
