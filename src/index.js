import isValidInput from './checkInput.js';
import numToArr from './util.js';
import { changeUI, resetUI } from './uiChanger.js';


export default class BaseballGame {
  constructor(digitCount = 3) {
    this.digitCount = digitCount;
    this.computerInputNumbers = this.makeRandomNumber();
    this.uiEventListeners();
    resetUI();
  }

  makeRandomNumber() {
    const numbers = [];
    while (numbers.length < this.digitCount) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

  uiEventListeners() {
    document.getElementById("submit").addEventListener("click", this.gameLogic.bind(this));
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

  gameLogic(e) {
    e.preventDefault();
    const userInput = document.getElementById("user-input").value;

    if (!isValidInput(userInput, this.digitCount)) {
      alert("잘못된 입력입니다. 중복되지 않는 서로 다른 3개의 숫자를 입력하세요");
      document.getElementById("user-input").value = "";
      return;
    }

    const userInputNumbers = numToArr(userInput);
    const resultString = this.play(this.computerInputNumbers, userInputNumbers);
    changeUI(resultString);
  }

  handleRestart() {
    this.computerInputNumbers = this.makeRandomNumber();
    resetUI();
  }
}

new BaseballGame();