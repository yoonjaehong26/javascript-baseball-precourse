export default class BaseballGameModel {
  constructor(digitCount) {
    this.digitCount = digitCount;
  }

  makeRandomNumbers() {
    const numbers = [];
    while (numbers.length < this.digitCount) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

  play(computerInputNumbers, userInputNumbers) {
    let strikeCount = 0;
    let ballCount = 0;

    for (let i = 0; i < computerInputNumbers.length; i += 1) {
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
      return '낫싱';
    }
    let resultString = '';
    if (ballCount > 0) {
      resultString += `${ballCount}볼`;
    }
    if (strikeCount > 0) {
      if (resultString) {
        resultString += ' ';
      }
      resultString += `${strikeCount}스트라이크`;
    }

    if (strikeCount === this.digitCount) {
      resultString = '🎉축하합니다!!!🎉 정답을 맞추셨습니다. <br> 재시작 하시겠습니까?';
    }
    return resultString;
  }
}
