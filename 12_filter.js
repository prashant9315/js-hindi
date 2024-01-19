const Coding = ["cpp", "js", "rb", "py"];

const values = Coding.forEach((val) => {
  console.log(val); //it will iterate from start and will print array
});
console.log(values); //it will print undefined that says forEach returns nothing
//to solve this problem we move further
//------------------------------------------

//uper wale problem ko solve karne ke liye ab hum filter use karenge
//filter values ko return karta hai
const nums = [1, 2, 3, 4, 5, 6];

const newnums = nums.filter((num) => num > 4); //agar ek line me likhenege to return default hota hai
console.log(newnums);

const newnums1 = nums.filter((num) => {
  return num > 4;
}); //agar scope ek ander likhenege to return likhna hota hai hota hai
console.log(newnums1);
