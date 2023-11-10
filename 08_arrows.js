const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username},welcome to website`); //this keyword is used to access the context of variable inside scope only
  },
};

user.welcomeMessage(); //this will print hitesh,welcome to website
user.username = "sam";
user.welcomeMessage(); //this will print sam,welcome to website

console.log(this); //it will print empty object as as nothing is declared globally
//but in browser console.log(this) it prints window not an empty object

function chai() {
  let username = "hitesh";
  console.log(this.username);
}
chai(); //it will print undefined kyuki this keyword sirf object me hi kaam karta hai and chai is a function

//another way to write function
const chaip = function () {
  let username = "hitesh";
  console.log(this.username);
  console.log(this);
};
chaip(); //it will also print undefined kyuki this keyword sirf object me hi kaam karta hai and chai is a function
//but ek ciz aur ki function ke under sirf agar console.log(this); aaise likha hai to wo print karega jo bhi element hai

const cha = () => {
  //using arrow function
  let username = "hitesh";
  console.log(this.username); //it will also print undefined kyuki this keyword sirf object me hi kaam karta hai and chai is a arrow function
  console.log(this); //it will print an empty object yahi difference hai arrow and normal function me
};
cha();

//arrow functon //////////////////////

//syntax of arrow
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(2, 4));

//we can also write arrow function in one line and usme return nhi use karte wo default hota hai
const addTwon = (num1, num2) => num1 + num2;
console.log(addTwon(2, 4));

//another way
const addTwono = (num1, num2) => num1 + num2;
console.log(addTwono(2, 4));

//if we have to use object in arrow function tab ( ) aaise parenthesis ke under use karenge
const addTw = (num1, num2) => ({ name: "hitesh" });
