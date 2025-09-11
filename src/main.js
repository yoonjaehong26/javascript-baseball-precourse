import isValidInput from './checkInput.js';
import numToArr from './util.js';
import { changeHtml } from './uiChanger.js';

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

document.getElementById("result").style.display = "none";

const computerInputNumbers = makeRandomNumber();

document.getElementById('submit').addEventListener('click', (event) => {
  event.preventDefault();
  const userInput = document.getElementById('user-input').value;

  if (!isValidInput(userInput)) {
    alert("잘못된 입력입니다. 중복되지 않는 서로 다른 3개의 숫자를 입력하세요");
    document.getElementById("user-input").value = "";
    return;
  }

  const userInputNumbers = numToArr(userInput);

  const resultString = play(computerInputNumbers, userInputNumbers);
  changeHtml(resultString);
})

function play(computerInputNumbers, userInputNumbers) {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < computerInputNumbers.length; i++) {
    if (computerInputNumbers[i] === userInputNumbers[i]) {
      strike++;
    } else if (computerInputNumbers.includes(userInputNumbers[i])) {
      ball++;
    }
  }
  return getPlayResultString(strike, ball);
};

function getPlayResultString(strike, ball) {
  if (strike === 0 && ball === 0) {
    return "낫싱";
  }
  let result = "";
  if (ball > 0) {
    result += `${ball}볼`;
  }
  if (strike > 0) {
    if (result) {
      result += " ";
    }
    result += `${strike}스트라이크`;
  }

  return result;
};