document.addEventListener("DOMContentLoaded", function() {
    // Select elements from the DOM
    let startButton = document.getElementById("startButton");
    let resetButton = document.getElementById("resetButton");
    let focusButton = document.getElementById("focusButton");
    let shortBreakButton = document.getElementById("shortBreakButton");
    let longBreakButton = document.getElementById("longBreakButton");
    let settingsButton = document.getElementById("settingsButton");
    let settingsModal = document.getElementById("settings");
    let overlay = document.getElementById("overlay");
    let timerElement = document.getElementById("timer");
    let pageContainer = document.querySelector(".full-page");

    // Timer variables
    let time = 1500; // Default time in seconds (25 minutes)
    let countdownInterval = null;

    // Default timer values
    let focusTime = 1500; // 25 minutes
    let shortBreakTime = 300; // 5 minutes
    let longBreakTime = 900; // 15 minutes

    // Function to update the timer display
    function updateTimerDisplay() {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }

    // Function to start the countdown
    function startTimer() {
        if (countdownInterval === null) {
            countdownInterval = setInterval(() => {
                if (time > 0) {
                    time--;
                    updateTimerDisplay();
                } else {
                    stopTimer();
                }
            }, 1000);
        }
    }

    // Function to stop the countdown
    function stopTimer() {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }

    // Handle focus button click
    focusButton.addEventListener("click", function() {
        time = focusTime;
        updateTimerDisplay();
        stopTimer(); // Ensure timer doesn't start automatically
    });

    // Handle short break button click
    shortBreakButton.addEventListener("click", function() {
        time = shortBreakTime;
        updateTimerDisplay();
        stopTimer(); // Ensure timer doesn't start automatically
    });

    // Handle long break button click
    longBreakButton.addEventListener("click", function() {
        time = longBreakTime;
        updateTimerDisplay();
        stopTimer(); // Ensure timer doesn't start automatically
    });

    // Handle start button click
    startButton.addEventListener("click", function() {
        startTimer();
    });

    // Handle reset button click
    resetButton.addEventListener("click", function() {
        stopTimer();
        time = focusTime; // Reset to default focus time
        updateTimerDisplay();
    });

    // Handle settings button click (toggle modal)
    settingsButton.addEventListener("click", function() {
        settingsModal.classList.toggle("show");
        overlay.classList.toggle("show");
    });

    // Handle closing settings modal when overlay is clicked
    overlay.addEventListener("click", function() {
        settingsModal.classList.remove("show");
        overlay.classList.remove("show");
    });

    // Handle settings form submission (apply new times and colors)
    document.getElementById("settingsForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Get new time values
        focusTime = parseInt(document.getElementById("focusTimeInput").value) * 60;
        shortBreakTime = parseInt(document.getElementById("shortBreakTimeInput").value) * 60;
        longBreakTime = parseInt(document.getElementById("longBreakTimeInput").value) * 60;

        // Get new colors
        let backgroundColor = document.getElementById("backgroundColorInput").value;
        let fontColor = document.getElementById("fontColorInput").value;

        // Apply new colors to the page and timer
        pageContainer.style.backgroundColor = backgroundColor;
        timerElement.style.color = fontColor;

        // Close the settings modal
        settingsModal.classList.remove("show");
        overlay.classList.remove("show");
    });

    // Initialize timer display
    updateTimerDisplay();
});
