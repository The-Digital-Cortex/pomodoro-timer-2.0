let focusTime = 25; // Default focus time in minutes
let shortBreakTime = 5; // Default short break time in minutes
let longBreakTime = 15; // Default long break time in minutes
let timer; // Variable to store the timer
let isRunning = false; // Flag to check if the timer is running

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

// Function to update timer display
function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

// Set focus time on button click without starting the timer
focusOption.addEventListener("click", () => {
    updateTimerDisplay(focusTime, 0); // Update display to focus time
    // Ensure timer doesn't start
});

// Set short break time on button click without starting the timer
shortBreakOption.addEventListener("click", () => {
    updateTimerDisplay(shortBreakTime, 0); // Update display to short break time
    // Ensure timer doesn't start
});

// Set long break time on button click without starting the timer
longBreakOption.addEventListener("click", () => {
    updateTimerDisplay(longBreakTime, 0); // Update display to long break time
    // Ensure timer doesn't start
});

// Start the timer when the start button is clicked
startButton.addEventListener("click", () => {
    if (isRunning) return; // Prevent starting multiple timers
    isRunning = true;

    // Get the current time in seconds from the display
    let totalSeconds = parseInt(minutesDisplay.textContent) * 60 + parseInt(secondsDisplay.textContent);
    
    timer = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timer);
            isRunning = false;
            return;
        }
        totalSeconds--; // Decrement total seconds
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        updateTimerDisplay(minutes, seconds); // Update the timer display
    }, 1000);
});

// Reset the timer when the reset button is clicked
resetButton.addEventListener("click", () => {
    clearInterval(timer); // Stop the timer
    isRunning = false; // Reset the running flag
    updateTimerDisplay(focusTime, 0); // Reset to the default focus time
});

// Open the settings modal when the settings button is clicked
settingsButton.addEventListener("click", () => {
    settingsModal.style.display = "block"; // Show settings modal
});

// Close the settings modal when the close button is clicked
closeModalButton.addEventListener("click", () => {
    settingsModal.style.display = "none"; // Hide settings modal
});

// Save settings when the save button is clicked
saveSettingsButton.addEventListener("click", () => {
    // Update time values from input fields
    focusTime = parseInt(document.getElementById("focusTime").value) || focusTime;
    shortBreakTime = parseInt(document.getElementById("shortBreak").value) || shortBreakTime;
    longBreakTime = parseInt(document.getElementById("longBreak").value) || longBreakTime;

    // Update display when saving settings
    updateTimerDisplay(focusTime, 0);
    settingsModal.style.display = "none"; // Hide settings modal

    // Update the color settings
    const fontColor = document.getElementById("fontColor").value;
    const backgroundColor = document.getElementById("backgroundColor").value;

    document.body.style.color = fontColor; // Change font color
    document.body.style.backgroundColor = backgroundColor; // Change background color
});
