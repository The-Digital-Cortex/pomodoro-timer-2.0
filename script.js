document.addEventListener("DOMContentLoaded", function() {
    let timerElement = document.getElementById("timer");
    let startButton = document.getElementById("startButton");
    let resetButton = document.getElementById("resetButton");
    let settingsButton = document.getElementById("settingsButton");
    
    let focusButton = document.getElementById("focusButton");
    let shortBreakButton = document.getElementById("shortBreakButton");
    let longBreakButton = document.getElementById("longBreakButton");

    let settingsModal = document.getElementById("settingsModal");
    let closeModalButton = document.getElementById("closeModalButton");

    let customFocusInput = document.getElementById("customFocus");
    let customShortBreakInput = document.getElementById("customShortBreak");
    let customLongBreakInput = document.getElementById("customLongBreak");

    let backgroundColorInput = document.getElementById("backgroundColor");
    let fontColorInput = document.getElementById("fontColor");

    let pageContainer = document.querySelector("body");

    let time = 1500; // Default focus time (25 minutes)
    let countdownInterval = null;

    // Event Listeners for the top preset buttons
    focusButton.addEventListener("click", function() {
        stopTimer(); // Ensure the timer does not start
        time = customFocusInput.value ? customFocusInput.value * 60 : 1500; // Use custom focus time or default
        updateTimerDisplay();
    });

    shortBreakButton.addEventListener("click", function() {
        stopTimer(); // Ensure the timer does not start
        time = customShortBreakInput.value ? customShortBreakInput.value * 60 : 300; // Use custom short break or default
        updateTimerDisplay();
    });

    longBreakButton.addEventListener("click", function() {
        stopTimer(); // Ensure the timer does not start
        time = customLongBreakInput.value ? customLongBreakInput.value * 60 : 900; // Use custom long break or default
        updateTimerDisplay();
    });

    // Start timer only when start button is clicked
    startButton.addEventListener("click", function() {
        if (countdownInterval === null) {
            startTimer();
        }
    });

    // Reset the timer
    resetButton.addEventListener("click", function() {
        stopTimer();
        updateTimerDisplay();
    });

    // Open settings modal
    settingsButton.addEventListener("click", function() {
        settingsModal.style.display = "block";
    });

    // Close settings modal
    closeModalButton.addEventListener("click", function() {
        settingsModal.style.display = "none";
    });

    // Change background color and font color
    document.getElementById("applyColors").addEventListener("click", function() {
        pageContainer.style.backgroundColor = backgroundColorInput.value;
        timerElement.style.color = fontColorInput.value;
    });

    // Update the timer display
    function updateTimerDisplay() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    }

    // Start the countdown timer
    function startTimer() {
        countdownInterval = setInterval(function() {
            if (time > 0) {
                time--;
                updateTimerDisplay();
            } else {
                stopTimer(); // Stop timer when time reaches zero
            }
        }, 1000);
    }

    // Stop the countdown timer
    function stopTimer() {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }

    // Initialize the timer display
    updateTimerDisplay();
});
