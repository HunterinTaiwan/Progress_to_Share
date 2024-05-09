let count = 0;
const countHeader = document.getElementById('count');
const countAddBtn = document.getElementById('add');
countHeader.innerText = count ;
countAddBtn.addEventListener("click", ()=>{
    count ++;
    countHeader.innerText = count;
})
const countSubtractBtn = document.getElementById('subtract');
countSubtractBtn.addEventListener("click", ()=>{
    count --;
    countHeader.innerText = count;
})