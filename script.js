document.addEventListener("DOMContentLoaded", function() {
    // Timer variables
    let time = 1500; // Default time in seconds (25 minutes)
    let countdownInterval = null;

    // Default timer values
    let focusTime = 1500; // 25 minutes
    let shortBreakTime = 300; // 5 minutes
    let longBreakTime = 900; // 15 minutes

    const timerElement = document.getElementById("timer");
    const startButton = document.getElementById("startButton");
    const resetButton = document.getElementById("resetButton");
    const pageContainer = document.querySelector(".full-page");

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

    // Attach event listener for start button
    startButton.addEventListener("click", function() {
        startTimer();
    });

    // Attach event listener for reset button
    resetButton.addEventListener("click", function() {
        stopTimer();
        time = focusTime; // Reset to default focus time
        updateTimerDisplay();
    });

    // Function to set the timer based on the button clicked
    function setTimer(newTime) {
        time = newTime;
        updateTimerDisplay();
        stopTimer(); // Ensure timer doesn't start automatically
    }

    // Attach event listeners for focus, short break, and long break buttons
    document.getElementById("focusButton").addEventListener("click", function() {
        setTimer(focusTime);
    });

    document.getElementById("shortBreakButton").addEventListener("click", function() {
        setTimer(shortBreakTime);
    });

    document.getElementById("longBreakButton").addEventListener("click", function() {
        setTimer(longBreakTime);
    });

    // Initialize timer display
    updateTimerDisplay();
});
