import BaseballGameModel from '../model/BaseballGameModel.js';
import BaseballGameView from '../view/BaseballGameView.js';

import numToArr from '../utils/additionalUtilFunction.js';

export default class BaseballGame {
  static DEFAULT_DIGIT_COUNT = 3;

  static GAME_RESULT_STRING = '🎉축하합니다!!!🎉 정답을 맞추셨습니다. <br> 재시작 하시겠습니까?';

  constructor(digitCount = BaseballGame.DEFAULT_DIGIT_COUNT) {
    this.digitCount = digitCount;
    this.BaseballGameModel = new BaseballGameModel(this.digitCount);
    this.computerInputNumbers = null;
  }

  static start() {
    const game = new BaseballGame();
    game.computerInputNumbers = game.BaseballGameModel.makeRandomNumbers();
    game.listenUIEvent();
    BaseballGameView.resetGameResultUI();
  }

  listenUIEvent() {
    document.getElementById('submit').addEventListener('click', this.handleGuessSubmit);
    document.getElementById('game-restart-button').addEventListener('click', this.restartGame);
  }

  handleGuessSubmit = (e) => {
    e.preventDefault();

    const userInput = document.getElementById('user-input').value;
    if (!this.BaseballGameModel.isValidInput(userInput, this.digitCount)) {
      BaseballGameView.alertWrongUserInput();
      return;
    }

    const userInputNumbers = numToArr(userInput);
    const resultString = BaseballGameModel.play(this.computerInputNumbers, userInputNumbers);

    if (resultString === `${this.digitCount}스트라이크`) {
      BaseballGameView.changeCompleteGameResultUI(BaseballGame.GAME_RESULT_STRING);
    } else {
      BaseballGameView.changeIncompleteGameResultUI(resultString);
    }
  };

  restartGame = () => {
    this.computerInputNumbers = this.BaseballGameModel.makeRandomNumbers();
    BaseballGameView.resetGameResultUI();
  };
}

BaseballGame.start();
