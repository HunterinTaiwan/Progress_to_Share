// Temperature Conversion Program
// 
// 
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){
    if(toFahrenheit.checked){
        // result.textContent = "You Selected to Fahrenheit"
        temp = Number(textBox.value);
        temp = temp *9/5+32
        result.textContent = temp.toFixed(1) + "°F" 
        // Degree Symbol => Alt+0176
    }
    else if(toCelsius.checked){
        // result.textContent = "You Selected to Celsius"
        temp = Number(textBox.value);
        temp = (temp-32) *(5/9)
        result.textContent = temp.toFixed(1) + "°F" 

    }
    else{
        result.textContent = "請選擇單位"
    }
}