let focusTime = 25; // Default focus time in minutes
let shortBreakTime = 5; // Default short break time in minutes
let longBreakTime = 15; // Default long break time in minutes
let timer; // Timer variable
let isRunning = false; // Timer state
let timeRemaining; // Time remaining in seconds

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const settingsModal = document.getElementById("settingsModal");
const saveSettingsButton = document.getElementById("saveSettings");
const closeModal = document.getElementById("closeModal");

// Event listeners for preset buttons
document.getElementById("focusOption").addEventListener("click", () => {
    timeRemaining = focusTime * 60; // Set time for focus
    updateTimerDisplay(focusTime, 0); // Update display
});

document.getElementById("shortBreakOption").addEventListener("click", () => {
    timeRemaining = shortBreakTime * 60; // Set time for short break
    updateTimerDisplay(shortBreakTime, 0); // Update display
});

document.getElementById("longBreakOption").addEventListener("click", () => {
    timeRemaining = longBreakTime * 60; // Set time for long break
    updateTimerDisplay(longBreakTime, 0); // Update display
});

// Start button functionality
document.getElementById("start").addEventListener("click", () => {
    if (!isRunning && timeRemaining > 0) {
        startTimer();
    }
});

// Reset button functionality
document.getElementById("reset").addEventListener("
