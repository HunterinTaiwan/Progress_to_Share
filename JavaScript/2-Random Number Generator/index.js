// Random Number Generator
// 
// 
let randomNum = Math.random();
// generate random number between 0 and 1
console.log(randomNum);
// generate between 1 and 6
let randomNum2 = Math.floor(Math.random()*6)+1;

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min1 = 50;
const max1 = 100;
let randomNum3;
let randomNum4;
let randomNum5;

myButton.onclick = function(){
    randomNum3 = Math.floor(Math.random() * (max1-min1+1)) + min1;
    randomNum4 = Math.floor(Math.random() * (max1-min1+1)) + min1;
    randomNum5 = Math.floor(Math.random() * (max1-min1+1)) + min1;
    // randomNum3 = randomNum3 + min1;
    label1.textContent = randomNum3;
    label2.textContent = randomNum4;
    label3.textContent = randomNum5;
}

const randomNum6 = Math.floor(Math.random() * (max1 - min1 + 1)) + min;
console.log(randomNum6);




