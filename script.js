let focusTime = 25; // Default values
let shortBreakTime = 5;
let longBreakTime = 15;
let timer;
let isRunning = false;

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");

const focusOption = document.getElementById("focusOption");
const shortBreakOption = document.getElementById("shortBreakOption");
const longBreakOption = document.getElementById("longBreakOption");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const settingsButton = document.getElementById("settings");
const saveSettingsButton = document.getElementById("saveSettings");
const settingsModal = document.getElementById("settingsModal");
const closeModalButton = document.getElementById("closeModal");

// Function to reset the timer display based on selected time
function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

// Set focus time on button click
focusOption.addEventListener("click", () => {
    updateTimerDisplay(focusTime, 0); // Set timer to focus time without starting it
});

// Set short break time on button click
shortBreakOption.addEventListener("click", () => {
    updateTimerDisplay(shortBreakTime, 0); // Set timer to short break time without starting it
});

// Set long break time on button click
longBreakOption.addEventListener("click", () => {
    updateTimerDisplay(longBreakTime, 0); // Set timer to long break time without starting it
});

// Start the timer
startButton.addEventListener("click", () => {
    if (isRunning) return; // Prevent multiple timers
    isRunning = true;

    let totalSeconds = parseInt(minutesDisplay.textContent) * 60 + parseInt(secondsDisplay.textContent);
    
    timer = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timer);
            isRunning = false;
            return;
        }
        totalSeconds--;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        updateTimerDisplay(minutes, seconds);
    }, 1000);
});

// Reset the timer
resetButton.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    updateTimerDisplay(focusTime, 0); // Reset to the default focus time
});

// Open the settings modal
settingsButton.addEventListener("click", () => {
    settingsModal.style.display = "block";
});

// Close the settings modal
closeModalButton.addEventListener("click", () => {
    settingsModal.style.display = "none";
});

// Save settings
saveSettingsButton.addEventListener("click", () => {
    focusTime = parseInt(document.getElementById("focusTime").value) || focusTime;
    shortBreakTime = parseInt(document.getElementById("shortBreak").value) || shortBreakTime;
    longBreakTime = parseInt(document.getElementById("longBreak").value) || longBreakTime;

    // Update display when saving settings
    updateTimerDisplay(focusTime, 0);
    settingsModal.style.display = "none";

    // Update the color settings
    const fontColor = document.getElementById("fontColor").value;
    const backgroundColor = document.getElementById("backgroundColor").value;

    document.body.style.color = fontColor;
    document.body.style.backgroundColor = backgroundColor;
});
