const arrays = [1, 2, 3, 4];

const myArr = new Array(1, 2, 3, 4);
console.log(myArr[0]);

myArr.push(6); //to add new value in array from end
myArr.pop(); //to remove last value from array

myArr.unshift(9); // to add new value in array in first place
myArr.shift(); //to remove first number from array

myArr.includes(9); //it will give boolean output as it says whaether the array consists the value or not
myArr.indexOf(9); //it will give the index of number

const newarr = myArr.join(); //it will convert in string with comma seperated

myArr.slice(1, 2); //it will give array from 1 to last-1 but onriginal array will be same not part will be deleted

myArr.splice(1, 3); //it will give array from 1 to 3 but it will also remove this part from original array

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)//it will just add dcheros as array me array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)//it will make another new array with inviduals
// console.log(allHeros);//

const all_new_heros = [...marvel_heros, ...dc_heros]; //it is same as concanate it will take each element of array as inviduals and make new array with this

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); //it will make single array with all depth
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh")); //convert string in array
console.log(Array.from({ name: "hitesh" })); // interesting it will otput empty array u have to give ki kisko array banana hai key ko ya value ko

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //make array
