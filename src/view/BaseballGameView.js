export default class BaseballGameView {
  static changeIncompleteGameResultUI(resultString) {
    document.getElementById('result').style.display = 'block';
    document.getElementById('result').innerHTML = resultString;
    document.getElementById('game-restart-button').style.display = 'none';
  }

  static changeCompleteGameResultUI(resultString) {
    document.getElementById('result').style.display = 'block';
    document.getElementById('result').innerHTML = resultString;
    document.getElementById('game-restart-button').style.display = 'block';
  }

  static resetGameResultUI() {
    document.getElementById('user-input').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').style.display = 'none';
    document.getElementById('game-restart-button').style.display = 'none';
  }

  static alertWrongUserInput() {
    alert('잘못된 입력입니다. 중복되지 않는 서로 다른 3개의 숫자를 입력하세요');
    document.getElementById('user-input').value = '';
  }
}
