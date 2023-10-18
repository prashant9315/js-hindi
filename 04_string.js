const name = "hitesh";
const repocount = 50;

console.log(`my name is ${name} and my repo count is ${repocount}`);
//always use backk tick and dollar sign to print in console instead of double quote

const Newstring = new String("hitesh"); //another way to declare string

console.log(Newstring[0]);
console.log(Newstring.length);
console.log(Newstring.toUpperCase()); //convert to uppercase
console.log(Newstring.charAt(2)); //give the character at position 2
console.log(Newstring.indexOf("t")); //give the position of char t

console.log(Newstring.substring(0, 4)); //give the  substring from 0 to 3

console.log(Newstring.slice(-6, 4)); //give substring from reverse

console.log(Newstring.trim()); //it will remove the spcaes from the string

console.log(Newstring.replace("t", "-")); //it will replace the character in string with the new character

console.log(Newstring.includes("ssss"));
//it include strings and character in given string

console.log(Newstring.split("-")); //this will split the string on the basis of character in function in different strings
