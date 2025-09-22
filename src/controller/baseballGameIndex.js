import BaseballGameModel from '../model/BaseballGameModel.js';
import BaseballGameView from '../view/BaseballGameView.js';

import numToArr from '../utils/additionalUtilFunction.js';

export default class BaseballGame {
  static #DEFAULT_DIGIT_COUNT = 3;

  #digitCount;

  #isCompleteGame;

  #computerInputNumbers;

  #BaseballGameModel;

  constructor(digitCount = BaseballGame.#DEFAULT_DIGIT_COUNT) {
    this.#digitCount = digitCount;

    this.#BaseballGameModel = new BaseballGameModel(this.#digitCount);

    this.#isCompleteGame = false;
    this.#computerInputNumbers = this.#BaseballGameModel.makeRandomNumbers();
    this.#listenUIEvent();
    BaseballGameView.resetGameResultUI();
  }

  #listenUIEvent() {
    document.getElementById('submit').addEventListener('click', this.#handleGuessSubmit);
    document.getElementById('game-restart-button').addEventListener('click', this.#restartGame);
  }

  #handleGuessSubmit = (e) => {
    e.preventDefault();

    if (this.#isCompleteGame) {
      return;
    }

    const userInput = document.getElementById('user-input').value;
    if (!this.#BaseballGameModel.isValidInput(userInput, this.#digitCount)) {
      BaseballGameView.alertWrongUserInput(this.#digitCount);
      return;
    }

    const userInputNumbers = numToArr(userInput);
    const resultString = BaseballGameModel.play(this.#computerInputNumbers, userInputNumbers);

    const { isCompleteGame } = BaseballGameModel
      .calculatePlayResult(this.#computerInputNumbers, userInputNumbers);

    if (isCompleteGame) {
      this.#isCompleteGame = true;
      BaseballGameView.changeCompleteGameResultUI();
    } else {
      BaseballGameView.changeIncompleteGameResultUI(resultString);
    }
  };

  #restartGame = () => {
    this.#computerInputNumbers = this.#BaseballGameModel.makeRandomNumbers();
    BaseballGameView.resetGameResultUI();
    this.#isCompleteGame = false;
  };
}

const game = new BaseballGame();
