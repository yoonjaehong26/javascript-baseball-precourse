import isValidInput from './checkInput.js';
import numToArr from './util.js';
import { changeGameResultUI, resetGameResultUI } from './uiChanger.js';


export default class BaseballGame {
  constructor(digitCount = 3) {
    this.digitCount = digitCount;
    this.computerInputNumbers = this.makeRandomNumber();
    this.uiEventListeners();
    resetGameResultUI();
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
    document.getElementById("submit").addEventListener("click", this.gameLogic);
    document.getElementById("game-restart-button").addEventListener("click", this.restartLogic);
  }

  play(computerInputNumbers, userInputNumbers) {
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < computerInputNumbers.length; i++) {
      if (computerInputNumbers[i] === userInputNumbers[i]) {
        strikeCount += 1;
      } else if (computerInputNumbers.includes(userInputNumbers[i])) {
        ballCount += 1;
      }
    }
    return this.getPlayResultString(strikeCount, ballCount);
  }

  getPlayResultString(strikeCount, ballCount) {
    if (strikeCount === 0 && ballCount === 0) {
      return "낫싱";
    }
    let resultString = "";
    if (ballCount > 0) {
      resultString += `${ballCount}볼`;
    }
    if (strikeCount > 0) {
      if (resultString) {
        resultString += " ";
      }
      resultString += `${strikeCount}스트라이크`;
    }

    if (strikeCount === 3){
      resultString = "🎉축하합니다!!!🎉 정답을 맞추셨습니다. <br> 재시작 하시겠습니까?";
    }
      return resultString;
  }

  gameLogic = (e) => {
    e.preventDefault();

    const userInput = document.getElementById("user-input").value;
    if (!isValidInput(userInput, this.digitCount)) {
      alert("잘못된 입력입니다. 중복되지 않는 서로 다른 3개의 숫자를 입력하세요");
      document.getElementById("user-input").value = "";
      return;
    }

    const userInputNumbers = numToArr(userInput);
    const resultString = this.play(this.computerInputNumbers, userInputNumbers);

    changeGameResultUI(resultString);
  }

  restartLogic = () => {
    this.computerInputNumbers = this.makeRandomNumber();
    resetGameResultUI();
  }
}

new BaseballGame();