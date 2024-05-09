// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the funtion to execute that code.
// 
// 
function happyBirthday() {
    console.log('Happy Birthday to you!');
    console.log('Happy Birthday to you!');
    console.log(`Happy Birthday dear you!`);
    console.log('Happy Birthday to you!');
}

happyBirthday();

function happyBirthday(name,age) {
// function happyBirthday(age,name) {
    console.log('Happy Birthday to you!');
    console.log('Happy Birthday to you!');
    console.log(`Happy Birthday dear ${name}!`);
    console.log('Happy Birthday to you!');
    console.log(`You are ${age} years old!`);
}

happyBirthday("Jasmine", 20);

function add(x,y){
    // let result = x + y;
    // return result;
    return x+y;
}
console.log(add(2,3));
// add 2 and 3 together

function subtract(x,y){
    return x - y;
}
console.log(subtract(5,9))
// subtract 9 from 5

// multiply x and y together
// x times y
function divide(x,y){
    return x / y;
}
console.log(divide(10,5))
// 10 divided by 5 
// divide 10 by 5


function isEven(number){
    // if(number % 2 === 0){
    //     return true;
    // } else {
    //     return false;
    // }
    // wrong way => number % 2 === 0? return true : return false;
    return number % 2 === 0? true : false;
}

console.log(`is Even?`)
console.log(isEven(12));
// number modulus 2 

function isValidEmail(email){
    return email.includes("@")? true : false;
}
console.log(`is Valid Email?`)
console.log(isValidEmail("KzH4F@example.com"))
console.log(isValidEmail("ElonMusk.com"))


// variable scope = where a variable is recognized and accessible (local vs global)

// any varable declared inside a function is local to that function/ has a local scope
// global variable are variables that declared outside of functions
// if two varaibles with the same name, the local one wins the global one.

