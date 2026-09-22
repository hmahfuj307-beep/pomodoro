let timerId = null;
let button = document.querySelector("#start-btn"); 
let changeBackg = document.querySelector("#one");
let timeLeft = 25 * 60;

function pomodoro() {
    if (timeLeft > 0) {
        timeLeft--;
        let minutLeft = Math.floor(timeLeft / 60);
        let secondLeft = timeLeft % 60;
        
        let mm = String(minutLeft).padStart(2, '0');
        let ss = String(secondLeft).padStart(2, '0');

        let input = button.querySelector("input");
        if (input) {
            input.value = `${mm}:${ss}`;
        } else {
            button.innerHTML = `<input type="text" value="${mm}:${ss}">`;
        }
    } else {
        clearInterval(timerId);
        timerId = null;
    }
}

button.addEventListener("click", () => {
    if (!timerId) {
        timerId = setInterval(pomodoro, 1000);
    } else {
        clearInterval(timerId);
        timerId = null;
    }
});

function chbg() {
    document.body.style.backgroundImage = "none";
    
    document.body.style.backgroundColor = "red";
}

changeBackg.addEventListener("click", chbg);