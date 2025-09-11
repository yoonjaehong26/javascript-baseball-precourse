import isValidInput from './checkInput.js';
import numToArr from './util.js';

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

let userInput;
document.getElementById('submit').addEventListener('click', (event) => {
  event.preventDefault();
  userInput = document.getElementById('user-input').value;

  if (!isValidInput(userInput)) {
    alert("잘못된 입력입니다. 중복되지 않는 서로 다른 3개의 숫자를 입력하세요");
    document.getElementById("user-input").value = "";
    return;
  }

  const userInputNumbers = numToArr(userInput);
});