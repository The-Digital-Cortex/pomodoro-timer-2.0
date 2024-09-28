// Variables to store time durations
let focusTime = 25;
let shortBreakTime = 5;
let longBreakTime = 15;
let timeLeft = focusTime * 60;
let timerInterval = null;

// Buttons
const focusButton = document.getElementById("focusButton");
const shortBreakButton = document.getElementById("shortBreakButton");
const longBreakButton = document.getElementById("longBreakButton");
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const settingsButton = document.getElementById("settingsButton");
const saveSettingsButton = document.getElementById("saveSettingsButton");
const closeModalButton = document.getElementById("closeModal");
const timerDisplay = document.getElementById("timer");
const settingsModal = document.getElementById("settingsModal");

// Event listeners for preset buttons (Focus, Short Break, Long Break)
focusButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timeLeft = focusTime * 60;
    updateTimerDisplay(timeLeft);
});

shortBreakButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timeLeft = shortBreakTime * 60;
    updateTimerDisplay(timeLeft);
});

longBreakButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timeLeft = longBreakTime * 60;
    updateTimerDisplay(timeLeft);
});

// Start button functionality
startButton.addEventListener("click", () => {
    if (timerInterval) return; // Prevent multiple intervals
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay(timeLeft);
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);
});

// Reset button functionality
resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = focusTime * 60;
    updateTimerDisplay(timeLeft);
});

// Update the timer display
function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
    timerDisplay.textContent = display;
}

// Open and close the settings modal
settingsButton.addEventListener("click", () => {
    settingsModal.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
    settingsModal.style.display = "none";
});

// Save settings when the save button is clicked
saveSettingsButton.addEventListener("click", () => {
    focusTime = parseInt(document.getElementById("focusTime").value) || focusTime;
    shortBreakTime = parseInt(document.getElementById("shortBreak").value) || shortBreakTime;
    longBreakTime = parseInt(document.getElementById("longBreak").value) || longBreakTime;

    updateTimerDisplay(focusTime * 60); // Update the timer display with the new focus time
    settingsModal.style.display = "none"; // Hide settings modal

    const fontColor = document.getElementById("fontColor").value;
    const backgroundColor = document.getElementById("backgroundColor").value;

    document.body.style.color = fontColor; // Change font color
    document.body.style.backgroundColor = backgroundColor; // Change background color
    document.body.style.borderColor = "transparent"; // Keep the border invisible
});
