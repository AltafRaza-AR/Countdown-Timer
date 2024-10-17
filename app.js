let timer;
let totalTimeInSeconds = 0;
let isPaused = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', () => {
    const minutesInput = document.getElementById('minutes').value;
    const secondsInput = document.getElementById('seconds').value;

    const minutes = parseInt(minutesInput, 10) || 0;
    const seconds = parseInt(secondsInput, 10) || 0;

    if (isPaused) {
        isPaused = false;
    } else {
        totalTimeInSeconds = minutes * 60 + seconds;
    }

    clearInterval(timer);
    timer = setInterval(updateCountdown, 1000);
});

pauseButton.addEventListener('click', () => {
    clearInterval(timer);
    isPaused = true;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    totalTimeInSeconds = 0;
    display.textContent = '00:00';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    isPaused = false;
});

function updateCountdown() {
    if (totalTimeInSeconds > 0) {
        totalTimeInSeconds--;
        const minutes = Math.floor(totalTimeInSeconds / 60);
        const seconds = totalTimeInSeconds % 60;
        display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    } else {
        clearInterval(timer);
    }
}
