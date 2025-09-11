export function changeHtml(resultString) {
  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML = resultString;
  document.getElementById("game-restart-button").style.display = resultString === "3스트라이크" ? "block" : "none";
}