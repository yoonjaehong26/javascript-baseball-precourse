export default class BaseballGameView {
  static changeGameResultUI(resultString) {
    document.getElementById('result').style.display = 'block';
    document.getElementById('result').innerHTML = resultString;
    document.getElementById('game-restart-button').style.display = resultString === '🎉축하합니다!!!🎉 정답을 맞추셨습니다. <br> 재시작 하시겠습니까?' ? 'block' : 'none';
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
