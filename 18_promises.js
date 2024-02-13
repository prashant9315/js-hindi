//promises use karte kisi bhi kaam ko karne ka kissi kaam ke hone ke baad
//syntax->resolve is connected to then and reject is connected to catch
const promiseone = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve(); //it is use to what needs to done after settimeour function so we then in 9th line tabhi ye print hoga
  }, 1000);
});

//this is the way to connect resolve to then
promiseone.then(function () {
  console.log("promise consumed");
});

//we can also do above thing without storing in variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

//we can pass object in resolve and then access it through then funcion
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong"); //reject is uesd to print error
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    //then chaining isliye kiye hai taki jab kuch return ho to wo agle then me store hoke print ho kuki variable me store nhi hota
    console.log(username);
  })
  .catch(function (error) {
    //catch is use to connect with reject in promises
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected")); //finally hamesha cahlega

//then-catch ko humlog async -await ki tarah bhi likh sakte
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

//syntax of async-await and try-catch is used to if promises runs or not
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//fetch syntax
fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

//fetch pahle run hoga kissi bhi dusre promise se kuki fetch ka request priority queue
//me jata hai to ki call stack wale queue se pahle run hota hai.run karke dekh lo code ko
