// Timer setup
let timer;
let timerRunning = false;
let selectedTime = 1500; // Default focus time 25 minutes

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const settingsBtn = document.getElementById("settingsBtn");

const shortBreakBtn = document.getElementById("shortBreakBtn");
const focusBtn = document.getElementById("focusBtn");
const longBreakBtn = document.getElementById("longBreakBtn");

const settingsModal = document.getElementById("settingsModal");
const closeModal = document.getElementById("closeModal");
const saveSettingsBtn = document.getElementById("saveSettings");

let focusTime = 1500; // 25 minutes
let shortBreakTime = 300; // 5 minutes
let longBreakTime = 900; // 15 minutes

let fontColor = "#000000";
let backgroundColor = "#FFFFFF";

// Functions
function updateDisplayTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Set up for start button
function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timer = setInterval(function() {
            if (selectedTime > 0) {
                selectedTime--;
                updateDisplayTime(selectedTime);
            } else {
                clearInterval(timer);
                timerRunning = false;
            }
        }, 1000);
    }
}

// Preset button click to update time without starting the timer
shortBreakBtn.addEventListener("click", function() {
    selectedTime = shortBreakTime;
    updateDisplayTime(selectedTime);
});

focusBtn.addEventListener("click", function() {
    selectedTime = focusTime;
    updateDisplayTime(selectedTime);
});

longBreakBtn.addEventListener("click", function() {
    selectedTime = longBreakTime;
    updateDisplayTime(selectedTime);
});

// Start button to trigger timer
startBtn.addEventListener("click", function() {
    if (!timerRunning) {
        startTimer();
    }
});

// Reset button
resetBtn.addEventListener("click", function() {
    clearInterval(timer);
    timerRunning = false;
    updateDisplayTime(selectedTime);
});

// Settings modal logic
settingsBtn.addEventListener("click", function() {
    settingsModal.style.display = "block";
});

closeModal.addEventListener("click", function() {
    settingsModal.style.display = "none";
});

// Save settings logic
saveSettingsBtn.addEventListener("click", function() {
    // Retrieve the custom times
    focusTime = document.getElementById("focusTime").value * 60;
    shortBreakTime = document.getElementById("shortBreak").value * 60;
    longBreakTime = document.getElementById("longBreak").value * 60;

    // Retrieve font color and background color
    fontColor = document.getElementById("fontColor").value;
    backgroundColor = document.getElementById("backgroundColor").value;

    // Apply colors to the page
    document.body.style.color = fontColor;
    document.body.style.backgroundColor = backgroundColor;

    // Close modal
    settingsModal.style.display = "none";
});
