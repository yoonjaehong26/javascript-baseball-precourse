import checkInput from './checkInput.js';
import utils from './util.js';

function makeRandomNumber() {
  const numbers = [];
  while (numbers.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  return numbers;
}

let userInputNumbers;
document.getElementById('submit').addEventListener('click', (event) => {
  event.preventDefault();
  userInputNumbers = document.getElementById('user-input').value;
});
