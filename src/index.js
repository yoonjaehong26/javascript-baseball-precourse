import isValidInput from './checkInput.js';
import numToArr from './util.js';
import { changeHtml, resetUI } from './uiChanger.js';

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

export default class BaseballGame {
  constructor() {
    this.computerInputNumbers = makeRandomNumber();
    this.initEventListeners();
    resetUI();
  }

  initEventListeners() {
    document.getElementById("submit").addEventListener("click", this.handleSubmit.bind(this));
    document.getElementById("game-restart-button").addEventListener("click", this.handleRestart.bind(this));
  }

  play(computerInputNumbers, userInputNumbers) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < computerInputNumbers.length; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strike++;
      } else if (computerInputNumbers.includes(userInputNumbers[i])) {
        ball++;
      }
    }
    return this.getPlayResultString(strike, ball);
  }

  getPlayResultString(strike, ball) {
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
  }

  handleSubmit(e) {
    e.preventDefault();
    const userInput = document.getElementById("user-input").value;

    if (!isValidInput(userInput)) {
      alert("잘못된 입력입니다. 중복되지 않는 서로 다른 3개의 숫자를 입력하세요");
      document.getElementById("user-input").value = "";
      return;
    }

    const userInputNumbers = numToArr(userInput);
    const resultString = this.play(this.computerInputNumbers, userInputNumbers);
    changeHtml(resultString);
  }

  handleRestart() {
    this.computerInputNumbers = makeRandomNumber();
    resetUI();
  }
}

new BaseballGame();