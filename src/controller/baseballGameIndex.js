import BaseballGameModel from '../model/BaseballGameModel.js';
import BaseballGameView from '../view/BaseballGameView.js';

import isValidInput from '../utils/checkInput.js';
import numToArr from '../utils/additionalUtilFunction.js';

export default class BaseballGame {
  constructor(digitCount = 3) {
    this.digitCount = digitCount;
    this.BaseballGameModel = new BaseballGameModel(this.digitCount);
    this.computerInputNumbers = null;
  }

  static start() {
    const game = new BaseballGame();
    game.computerInputNumbers = game.BaseballGameModel.makeRandomNumber();
    game.uiEventListeners();
    BaseballGameView.resetGameResultUI();
  }

  uiEventListeners() {
    document.getElementById('submit').addEventListener('click', this.gameLogic);
    document.getElementById('game-restart-button').addEventListener('click', this.restartLogic);
  }

  gameLogic = (e) => {
    e.preventDefault();

    const userInput = document.getElementById('user-input').value;
    if (!isValidInput(userInput, this.digitCount)) {
      BaseballGameView.alertWrongUserInput();
      return;
    }

    const userInputNumbers = numToArr(userInput);
    const resultString = this.BaseballGameModel.play(this.computerInputNumbers, userInputNumbers);

    if (resultString === '🎉축하합니다!!!🎉 정답을 맞추셨습니다. <br> 재시작 하시겠습니까?') {
      BaseballGameView.changeCompleteGameResultUI(resultString);
    } else {
      BaseballGameView.changeIncompleteGameResultUI(resultString);
    }
  };

  restartLogic = () => {
    this.computerInputNumbers = this.BaseballGameModel.makeRandomNumber();
    BaseballGameView.resetGameResultUI();
  };
}

BaseballGame.start();
