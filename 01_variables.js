const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";

let accountState;

// accountId = 2 // not allowed because it is const

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

/*
Prefer not to use var
because of issue in block scope and functional scope
var scope ke bahar excess kar sakte hai,let and const scope ke bahar access nhi kar payenge
*/

console.table([accountId, accountEmail, accountPassword, accountCity]); //to print all in one way
