//object literals=>this is how object defines
const mysem = Symbol("key1"); //this is how symbols are declared

//singleton object
const user = new object();

//non singleton object
const JSuser = {
  name: "hitesh", //data types are of string
  "full name": "hitesh Chaudhary", //this can only access by [] method
  age: 18,
  [mysem]: "key1", //this is how symbol is written as object we cant write this as (mysem:"key1") it will become of string type
  location: "delhi",
  email: "hitesh@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "saturday"],
};

//access of object by two methods
console.log(JSuser.email); //one method
console.log(JSuser["email"]); //another method as it is of string types thats why we dclare it under double comma
console.log(JSuser["full name"]); //this cant be access as (jsuser.full name) it is wrong
console.log(JSuser[mysem]); //symbols also access by [ ] methods without double comma as it is not of string type

Object.freeze(JSuser); //after this u can't update or change any element of objects

JSuser.greeting = function () {
  console.log("hello JS user");
};
console.log(JSuser.greeting); //this will output undefined so wrong method
console.log(JSuser.greeting()); //this is correct way

//merging objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const obj3 = { obj1, obj2 }; //this will merge but it will not combine in single object
const obj5 = Object.assign({}, obj1, obj2, obj4); //this will convert in single object,first element is target
console.log(obj3);

const obj6 = { ...obj1, ...obj2, ...obj4 }; //this is another method to merge

//make an array of keys of jsuser
console.log(Object.keys(JSuser));

//make an array of values of jsuser
console.log(Object.values(JSuser));

//make an array of array of each each keys and values like[[keys,values],[keys,values],....]
console.log(Object.entries(JSuser));

//another syntax to access easily
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};
// course.courseInstructor is also written as below
const { courseInstructor } = course; //same as course.courseInstructor
console.log(courseInstructor);

//api is like tumhara kaam koi aur kare it is reperesend by json
//json is like object without variable
//ex-
// {
//     "name":"hiteh",
//     "id":1123,
//     "email":"hitsh@gamil.com"
// }

//json also represented in array of objects
//ex-
// [
//     {},
//     {}
// ]
