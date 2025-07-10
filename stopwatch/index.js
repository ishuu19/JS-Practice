startButton = document.querySelector("#start");
stopButton = document.querySelector("#stop");
resetButton = document.querySelector("#reset");
timeDisplay = document.querySelector("#time");

let startTime = 0;
let elapsedTime = 0;
let intervalTimer;

function startTimer(){
    startTime = Date.now() - elapsedTime;
    timeDisplay.textContent = "00:00:00:00";
    intervalTimer = setInterval(updateTimer, 10);

    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
}

function updateTimer(){
    elapsedTime = Date.now() - startTime;
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;


    timeDisplay.textContent = formattedTime;
}

function stopTimer(){
    clearInterval(intervalTimer);
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

function resetTimer(){
    clearInterval(intervalTimer);
    elapsedTime = 0;
    timeDisplay.textContent = "00:00:00:00";
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
