// Number Guessing Game
// 
// 
const minNum = 1;
const maxNum = 100;
const answer = Math.round(Math.random()*(maxNum - minNum) + minNum);
console.log(answer);

let attemps = 0;
let guess;
let running = true;

while(running) {
    guess = Number(window.prompt(`Guess a number between ${minNum} and ${maxNum}`));
    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    }
    else if (guess > maxNum || guess < minNum){
        window.alert(`Please enter a number between ${minNum} and ${maxNum}`);
    }
    else if (guess == null){
        alert("Please enter a number and click Yes");
    }
    else{ 
        attemps++;
        if (guess == answer){
            alert(`Correct! The answer was $(answer). You guessed ${attemps} times. It took you ${attemps} attempts.`);
            running = false;
        }
        else if (guess > answer){
            alert("Too high");
        }
        else{
            alert("Too low");
        }
    }
}
    