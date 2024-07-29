document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counter');
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    let count = 0;

    function updateDisplay() {
        counterDisplay.textContent = count;
    }

    minusButton.addEventListener('click', () => {
        count--;
        updateDisplay();
    });

    plusButton.addEventListener('click', () => {
        count++;
        updateDisplay();
    });
});