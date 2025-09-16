export function changeGameResultUI(resultString) {
  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML = resultString;
  document.getElementById("game-restart-button").style.display = resultString === "🎉축하합니다!!!🎉 정답을 맞추셨습니다. <br> 재시작 하시겠습니까?" ? "block" : "none";
}

export function resetGameResultUI() {
  document.getElementById("user-input").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").style.display = "none";
  document.getElementById("game-restart-button").style.display = "none";
}