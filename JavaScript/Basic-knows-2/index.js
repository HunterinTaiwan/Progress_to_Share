/*// string methods = allow you to manipulate and work with text (strings)

let userName = "Donki Cueto";

console.log(userName.charAt(4));
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));
console.log(userName.length);
let userName2 = "  DONKI    "
console.log(userName2.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(5));
console.log(userName.startsWith(" "));
console.log(userName.startsWith(" ")? `Your username can't begin with " "`:userName);
console.log(userName.endsWith("Cuto"));
console.log(userName.includes(" "));
console.log(userName.includes(" ")? `Your username can't include " "`:userName);
console.log(`--------`);

let phonenumber = "(123) 456-7890";
console.log(phonenumber.replaceAll("-", ""));
console.log(phonenumber.padStart(19, "0"));
console.log(phonenumber.padEnd(19, "*"));

console.log(userName.split(" "));
*/

//string slicing = creating a substring 
//                  substing from a portion of another string
//                  substring(start, end)
// 
//
const fullName = "Labron Greinke";
let firstName = fullName.slice(0, 6); 
console.log(firstName);
// let firstName2 = fullName.slice(,6);
// The last line will make syntax error happened.
let lastName = fullName.slice(7);
console.log(lastName);
let lastName2 = fullName.slice(7,14);
console.log(lastName2);
let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-1);
console.log(firstChar, lastChar);

let firstName3  = fullName.slice(0, fullName.indexOf(" "))
console.log(firstName3);
let Lastname3 = fullName.slice(fullName.lastIndexOf(" ") + 1);
console.log(Lastname3);

const email = "VJLsZ@example.com";
let usernamee = email.slice(0, email.indexOf("@"));
console.log(usernamee);
let extension = email.slice(email.lastIndexOf("@") + 1);
console.log(extension);

/*// Method Chaining = Calling one method after another
//                   in one continuous line of code.
// 
// 
let username = window.prompt("Enter your username");
// -------No METHOD CHAINING-------
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();
let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;
console.log(username);

// ------- METHOD CHAINING-------
username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
console.log(username);
*/

// logical operators (&&, ||, !) = used to combine conditional statements

//  = assignment operator
//  == comparison operator (compare if vlaues are equal)
//  === strict equality operator (compare if values and datatype are equal)
//  != inequality operator
//  !== strict inequality operator
// 
// 

const PI = 3.14
if(PI === "3.14"){
    console.log("PI is string 3.14");
}
else if(PI == "3.14"){
    console.log("PI is 3.14");
}
else{
    console.log("That's not PI");
}

if(PI !== 3.14){
    console.log("PI does not stritly equal to number 3.14");
}
else if(PI !== "3.14"){
    console.log("PI does not stritly equal to string 3.14");
}
else if(PI!=3.28){
    console.log("PI is not 3.28");
}

/*// while loop & do-while loop
// 
// 
// while( condition ){}
var username = "";
while(username === "" || username === null){
    username = window.prompt("Enter your username");
}
console.log(`Hello, ${username}!`);  
// if I press Cancel, the username will become null.
// First check the condition, then do the code. 
// In this kind of circumstance, if I didn't declare username with value, it will be undefined and not enter the while loop.

var username;
do{
    username = window.prompt("Enter your username");
}while( username === "" || username === null);
console.log(`Hello, ${username}!`);
// do the code first, then check the condition at the end.

var loggedIn = false;
while(!loggedIn){
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");
    if(username=="admin" && password=="1234" ){
        loggedIn = true;
        console.log(`Welcome, ${username}!`);
    }
    else{
        console.log("Invalid credentials! Please try again!");
    }
}

var loggedIn= true; 
do{
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");
    if(username=="admin" && password=="1234" ){
        loggedIn = true;
        console.log(`Welcome, ${username}!`);
    }
    else{
        console.log("Invalid credentials! Please try again!");
    }
}while(!loggedIn)
//In this case, while loop is better than do-while loop, because it prevents unnecessary steps when loggedIn=true.
*/


// for loop = repeat some codes for a LIMITED amount of times.
for(let i = 0; i <= 10; i++){
    console.log(i);
}
for(let i=1; i<=20; i++){
    if(i == 13){
        continue;        
    }
    else if(i == 17){
        break
    }   
    else{
        console.log(i);
    }
}


