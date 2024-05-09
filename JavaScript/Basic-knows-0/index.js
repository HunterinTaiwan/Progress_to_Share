// console.log(`Hello`);
// console.log(`I like sex.`)

// // window.alert(`This is an alert!`);
// // window.alert(`I like sex!`);

// document.getElementById(`myH1`).textContent = `Hunter`; 
// document.getElementById(`myP`).textContent = `I like sex!`;

// var age = 22;
// console.log(age);

// let price = 9.99;
// console.log(price); 

// let gpa=2.1;

// console.log(typeof gpa);
// console.log(`You are ${age} years old.`);
// console.log(`The price is $${price}.`);
// console.log(`Your gpa is: ${gpa}`);

// let firstName = `Hunter`;
// console.log(typeof firstName);
// console.log(`Your name is ${firstName}.`);

// let favoriteFood = `pizza`;
// console.log(`My favorite food is ${favoriteFood}.`);

// let lastName = `Chen`;
// let fullName = `${firstName} ${lastName}`;
// var age = 23;
// let student = false;

// document.getElementById(`p1`).textContent = `your`;
// document.getElementById(`p2`).textContent = age;
// document.getElementById(`p3`).textContent = student;

// let students=31;
// students+=1;
// students++;
// student--;

// console.log(students);

// operator preciedence
// 1. () 2.(+)5  (-)5   3.* / %  4.+ -


// How to accpet user Input
//
//
// EASY WAY = window prompt
// let username;
// username = window.prompt(`What is your name?`);
// console.log(username);
// PROFESSIONAL WAY = HTML textbox
// let username2;
// document.getElementById(`mySubmit`).onclick = function(){
//     username2 = document. getElementById(`myText`).value;
//     console.log(username2);
//     document.getElementById(`myH1`).textContent = `Hello ${username2}!`;
// };


//type(strings, numbers, booleans) conversion
//
//
// console.log(age);
// var age = window.prompt("How old are you?");
// age +=1;
// console.log(age, typeof age);
// age = Number(age);
// age +=1;
// console.log(age, typeof age);
//
let x= "pizza";
x=Number(x);
y=String(x);
z=Boolean(x);
console.log("x");
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
// When converting other types to Boolean, it will always be True.

let a=""; 
a=Number(a);
b=String(a);
c=Boolean(a);
console.log("a");
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
//But if empty string, it will be False.

let d;
d=Number(d);
e=String(d);
f=Boolean(d);
console.log("d");
console.log(d, typeof d);
console.log(e, typeof e);
console.log(f, typeof f);
// When converting other types to Number, it will always be 0.

let g=null;
g=Number(g);
h=String(g);
i=Boolean(g);
console.log("g");
console.log(g, typeof g);
console.log(h, typeof h);
console.log(i, typeof i);
// When converting other types to Number, it will always be 0.


// const = a variable that can't be changed
//
//
const PI = 3.14159;
// let PI=3.14159;
let radius;
let circumference;
// PI=52.69;

// radius = window.prompt(`What is the radius?`);
// radius = Number(radius);
// circumference = 2 * PI * radius;
// console.log(circumference);  

// document.getElementById(`mySubmit1`).onclick = function(){
//     radius = document. getElementById(`myText1`).value;
//     radius = Number(radius);
//     circumference = 2 * PI * radius;
//     document.getElementById(`myH3`).textContent = circumference + `cm`;
// }

