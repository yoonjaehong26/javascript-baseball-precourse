export default class BaseballGameView {
  static #GAME_RESULT_STRING = '🎉축하합니다!!!🎉 정답을 맞추셨습니다. <br> 재시작 하시겠습니까?';

  static #result = document.getElementById('result');

  static #userInput = document.getElementById('user-input');

  static #restartButton = document.getElementById('game-restart-button');

  static changeIncompleteGameResultUI(resultString) {
    this.#result.style.display = 'block';
    this.#result.innerHTML = resultString;
    this.#restartButton.style.display = 'none';
  }

  static changeCompleteGameResultUI() {
    this.#result.style.display = 'block';
    this.#result.innerHTML = this.#GAME_RESULT_STRING;
    this.#restartButton.style.display = 'block';
  }

  static resetGameResultUI() {
    this.#userInput.value = '';
    this.#result.innerHTML = '';
    this.#result.style.display = 'none';
    this.#restartButton.style.display = 'none';
  }

  static alertWrongUserInput(digitCount) {
    alert(`잘못된 입력입니다. 중복되지 않는 서로 다른 ${digitCount}개의 숫자를 입력하세요`);
    this.#userInput.value = '';
  }
}
