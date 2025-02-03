const pill = document.getElementById('pill');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

let counter = 0;
let intervalId = null;

function startIncrementing() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      if (counter < 100) {
        counter++;
        pill.textContent = counter;
      }
    }, 100);
  }
}

function startDecrementing() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      if (counter > 0) {
        counter--;
        pill.textContent = counter;
      }
    }, 100);
  }
}

function stopCounter() {
  clearInterval(intervalId);
  intervalId = null;
}

incrementButton.addEventListener('mousedown', startIncrementing);
incrementButton.addEventListener('mouseup', stopCounter);
incrementButton.addEventListener('mouseleave', stopCounter);

decrementButton.addEventListener('mousedown', startDecrementing);
decrementButton.addEventListener('mouseup', stopCounter);
decrementButton.addEventListener('mouseleave', stopCounter);
