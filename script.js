let countdown;
let isRunning = false;
let timeLeft;  // This will store the current time in seconds

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

// New buttons for options
const focusButton = document.getElementById('focusOption');
const shortBreakButton = document.getElementById('shortBreakOption');
const longBreakButton = document.getElementById('longBreakOption');

// Controls
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const settingsButton = document.getElementById('settings');
const saveSettingsButton = document.getElementById('saveSettings');

// Settings modal
const settingsModal = document.getElementById('settingsModal');
const closeModal = document.getElementById('closeModal');

// Input fields for custom times
const focusTimeInput = document.getElementById('focusTime');
const shortBreakInput = document.getElementById('shortBreak');
const longBreakInput = document.getElementById('longBreak');

// Color input fields
const fontColorInput = document.getElementById('fontColor');
const backgroundColorInput = document.getElementById('backgroundColor');

// Function to update the display
function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
}

// Function to set the timer based on the input
function setTimer(duration) {
    timeLeft = duration * 60;  // Convert minutes to seconds
    updateDisplay();
}

// Start the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;

        countdown = setInterval(() => {
            timeLeft--;
            updateDisplay();

            if (timeLeft <= 0) {
                clearInterval(countdown);
                alert('Time is up!');
                isRunning = false;
                timeLeft = 0;
                updateDisplay();
            }
        }, 1000);
    }
}

// Reset the timer
function resetTimer() {
    clearInterval(countdown);
    isRunning = false;

    // Reset to the focus time by default
    const focusTime = parseInt(focusTimeInput.value);
    setTimer(focusTime);
}

// Event listeners for option buttons
focusButton.addEventListener('click', () => {
    if (!isRunning) {
        const focusTime = parseInt(focusTimeInput.value);
        setTimer(focusTime);
        startTimer();
    }
});

shortBreakButton.addEventListener('click', () => {
    if (!isRunning) {
        const shortBreakTime = parseInt(shortBreakInput.value);
        setTimer(shortBreakTime);
        startTimer();
    }
});

longBreakButton.addEventListener('click', () => {
    if (!isRunning) {
        const longBreakTime = parseInt(longBreakInput.value);
        setTimer(longBreakTime);
        startTimer();
    }
});

resetButton.addEventListener('click', resetTimer);

// Open settings modal
settingsButton.addEventListener('click', () => {
    settingsModal.style.display = "block";
});

// Close settings modal
closeModal.addEventListener('click', () => {
    settingsModal.style.display = "none";
});

// Save settings and close modal
saveSettingsButton.addEventListener('click', () => {
    const fontColor = fontColorInput.value;
    const backgroundColor = backgroundColorInput.value;

    // Apply font and background color
    document.body.style.color = fontColor;
    document.body.style.backgroundColor = backgroundColor;

    settingsModal.style.display = "none";
});

// Initialize display with focus time
window.onload = () => {
    const focusTime = parseInt(focusTimeInput.value);
    setTimer(focusTime);
};
