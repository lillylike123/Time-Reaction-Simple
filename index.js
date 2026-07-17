console.log("Script is loaded and running fine!")

console.log("Adding waiting class...");
box.innerText = "wait for Green...";
box.classList.add('waiting');
console.log("Class list is nowL", box.classList); 

const delay = Math.floor(Math.random() * 3000) + 2000;
const box = document.getElementById('game');
const counterDisplay = document.getElementById('counter-display');
let startTime;
let timeout;
let fastedTime = Infinity;
let clickCount = 0; 

box.addEventListener('click', () => {
    console.log("Current classes:", box.classList);
    if (box.classList.contains('go')) {

        const reactionTime = Date.now() - startTime;
        clickCount++;

        counterDisplay.innerText = `Total Clickysss! : ${clickCount}`;
        if (reactionTime < fastedTime) {
            fastedTime = reactionTime;
        }
        box.innerText = `Time: ${reactionTime}ms | Best: ${fastedTime}ms | Total: ${clickCount}. Click to retry.`;
        box.classList.remove('go');
        box.style.backgroundColor = "";

        
    } else if (box.classList.contains('waiting')) {
        clearTimeout(timeout);
        box.innerText = "Uh oh! Too early :(";
        box.classList.remove('waiting');
    } else {
        box.innerText = "wait for Green...";
        box.classList.add('waiting');

        const delay = Math.floor(Math.random() * 3000) + 2000;

             timeout = setTimeout(() => {
            box.classList.remove('waiting');
            box.classList.add('go');
            box.innerText = "Click!";
            startTime = Date.now();
        }, delay);
    }
});



