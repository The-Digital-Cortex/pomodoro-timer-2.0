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

// Function to reset the timer display
function resetTimerDisplay() {
    const totalSeconds = focusTime * 60; // Default to focus time
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

// Set focus time on button click
focusOption.addEventListener("click", () => {
    resetTimerDisplay(); // Reset the display when selecting a preset
    minutesDisplay.textContent = String(focusTime).padStart(2, '0');
    secondsDisplay.textContent = '00';
});

// Set short break time on button click
shortBreakOption.addEventListener("click", () => {
    resetTimerDisplay(); // Reset the display when selecting a preset
    minutesDisplay.textContent = String(shortBreakTime).padStart(2, '0');
    secondsDisplay.textContent = '00';
});

// Set long break time on button click
longBreakOption.addEventListener("click", () => {
    resetTimerDisplay(); // Reset the display when selecting a preset
    minutesDisplay.textContent = String(longBreakTime).padStart(2, '0');
    secondsDisplay.textContent = '00';
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
        minutesDisplay.textContent = String(minutes).padStart(2, '0');
        secondsDisplay.textContent = String(seconds).padStart(2, '0');
    }, 1000);
});

// Reset the timer
resetButton.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    resetTimerDisplay(); // Reset to the default time
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
    resetTimerDisplay(); 
    settingsModal.style.display = "none";
    
    // Update the color settings
    const fontColor = document.getElementById("fontColor").value;
    const backgroundColor = document.getElementById("backgroundColor").value;

    document.body.style.color = fontColor;
    document.body.style.backgroundColor = backgroundColor;
});
