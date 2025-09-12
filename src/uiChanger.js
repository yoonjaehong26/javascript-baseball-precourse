export function changeUI(resultString) {
  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML = resultString;
  document.getElementById("game-restart-button").style.display = resultString === "3스트라이크" ? "block" : "none";
}

export function resetUI() {
  document.getElementById("user-input").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("result").style.display = "none";
  document.getElementById("game-restart-button").style.display = "none";
}