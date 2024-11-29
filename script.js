
let workDuration = 25 * 60;
let timeLeft = workDuration; 
let timer; 

const timerDisplay = document.getElementById("timer-display");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");
const sessionType = document.getElementById("session-type");

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--; 
        updateDisplay();
      } else {
        clearInterval(timer); 
        timer = null;
        sessionType.textContent = "Work Session Complete!"; 
        alert("Work Session Complete!"); 
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer); 
  timer = null;
}

function resetTimer() {
  clearInterval(timer); 
  timer = null;
  timeLeft = workDuration; 
  sessionType.textContent = "Work Session"; 
  updateDisplay(); 
}

startBtn.addEventListener("click", startTimer); 
stopBtn.addEventListener("click", stopTimer); 
resetBtn.addEventListener("click", resetTimer); 

updateDisplay(); 
