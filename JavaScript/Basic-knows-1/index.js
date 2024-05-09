/*//Math = built-in object that provides
// a collection of properties and methods.
// 
// 
console.log(Math.PI);
console.log(Math.E);

let x = 3.21;
let x1 = 3.95;
let y=2;
let y1=-2
var z;

z = Math.round(x);
console.log(z); 
z = Math.floor(x1);
console.log("floor,",z);
z = Math.ceil(x);
console.log(z);
z = Math.trunc(x);
console.log(z);
z = Math.pow(z,y);
console.log(z);
z = Math.sqrt(z);
console.log(z);
z = Math.log(z);
console.log(z);
// z = Math.sin(x);
// z = Math.cos(x);
// z = Math.tan(x);
z = Math.abs(y1);
console.log(z);
z = Math.sign(z);
// z = Math.sign(y1);
// z = Math.sign(0);
console.log(z);
// z = Math.exp(x);
// console.log(z);

// z = Math.log10(x);
// console.log(z);
// z = Math.log2(x);
// console.log(z);


let a = 3;
let b = 4;
let c = 5;
let d = 6;
let e = 7;
let f = 8;
let g = 9;
let h = 10;
let i = 11;
let max = Math.max(a,b,c,d,e,f,g,h,i);
let min = Math.min(a,b,c,d,e,f,g,h,i);
console.log(max);
console.log(min);
*/

/*//IF STATEMENTS = if a condition is true, execute some code3
//                 if not, do somethiung else.
//
//
let time=9;
if(time <12){
    console.log(`Good morning`);
}
else{
    console.log(`Good afternoon`);
}
let isStudent = false;
if(isStudent){
    console.log(`you are a student`);
}
else{
    console.log(`you are NOT a student`);
}

var age = 25;
let haslicense = false;
if(age >= 16){
    console.log(`You are old enough to drive.`);
    if (haslicense){
        console.log(`you have your license!`);
    }
    else{
        console.log(`you do not have your license yet!`);
    }
}
else{
    console.log(`you must be 16+ to have a license.`);
}

const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const resultElement = document.getElementById('resultElement');
var age;

mySubmit.onclick = function(){
    age = Number(myText.value);
    if(age >= 100){
        resultElement.textContent = `you are TOO OLD to enter this site.`
    }
    else if(age == 0){
        resultElement.textContent = `you can't enter. You were just born.`

    }
    else if(age>=18){
        resultElement.textContent = `you are old enough to enter this site.`
    }
    else if(age<0){
        resultElement.textContent = `Your age can't be below 0.`

    }
    else{
        resultElement.textContent = `You msut be 18+ to enter this site.`
    }
}
*/

/*// .checked = property that determines the checked stats of an
//             HTML checkbox or radio between element 
// 
// 
const myCheckbox = document.getElementById('myCheckbox');
const visaBtn = document.getElementById('visaBtn');
const masterCardBtn = document.getElementById('masterCardBtn');
const payPalBtn = document.getElementById('payPalBtn');
const mySubmit2 = document.getElementById('mySubmit2');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

mySubmit2.onclick = function(){
    if(myCheckbox.checked){
        subResult.textContent = `you are subscribed`;
    }
    else{
        subResult.textContent = `you are NOT subscribed`;
    }
    if(visaBtn.checked){
        paymentResult.textContent = `you are paying with Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `you are paying with MasterCard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `you are paying with PayPal`;
    }
    else{
        paymentResult.textContent = `please select your payment method. You must select a payment type.`;
    }
}
*/

//ternary operator = a shortcut to if() and else() statements
//                  helps to assign a variable based on a condtion
//                  condition ?  codeIftrue : codeIffalse;
let age = 16;
let message = age >= 18 ? `you are an adult` : `you are a minor`;
console.log(message);

let time = 16;
let greeting = time < 12 ? `Good morning` : `Good afternoon`;
console.log(greeting);

let isStudent = false;
let studentStatus = isStudent ? `you are a student` : `you are NOT a student`;
console.log(studentStatus);

let purchaseAmount = 130;
let discount = purchaseAmount > 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);

//SWITCH = can be an effecient replace to many else if statments
let day = 1;
/*if(day == 1){
    console.log(`Monday`);
}
else if(day == 2){
    console.log(`Tuesday`);
}
else if(day == 3){
    console.log(`Wednesday`);
}
else if(day == 4){
    console.log(`Thursday`);
}
else if(day == 5){
    console.log(`Friday`);
}
else if(day == 6){
    console.log(`Saturday`);
}
else if(day == 7){
    console.log(`Sunday`);
}
else{
    console.log(`${day} is not a day of the week.`);
}
*/

switch(day){
    case 1:
        console.log(`Monday`);
        break; //break out of the switch to avoid executing the rest of the code
    case 2:
        console.log(`Tuesday`);
        break;
    case 3:
        console.log(`Wednesday`);
        break;
    case 4:
        console.log(`Thursday`);
        break;
    case 5:
        console.log(`Friday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    case 7:
        console.log(`Sunday`);
        break;
    default:  //In case there are no matches
        console.log(`${day} is not a day of the week.`);
}

let testScore = 92;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = `A`;
        break;
    case testScore >= 80:
        letterGrade = `B`;
        break;
    case testScore >= 70:
        letterGrade = `C`;
        break;
    case testScore >= 60:
        letterGrade = `D`;
        break;
    default:
        letterGrade = `F`;
}