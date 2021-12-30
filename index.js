function rollDice() {
  var rollDiceBtn = document.querySelector("#roll-dice");
  var dice1 = randomDice();
  var dice2 = randomDice();

  putDiceImage("#playerOneDice", "images/" + dice1);
  putDiceImage("#playerTwoDice", "images/" + dice2);

  var resultString = "";
  if(dice1 === dice2) resultString = "⚔ It\'s a draw! ⚔";
  else if (dice1 > dice2) resultString = "🏆 Player 1 Victorious";
  else resultString = "Player 2 Victorious 🏆";

  var resultHead = document.querySelector("#result");
  resultHead.innerHTML = resultString;
  resultHead.classList.remove("invisible");
}

function resetGame() {
  putDiceImage("#playerOneDice", "images/dice1.png");
  putDiceImage("#playerTwoDice", "images/dice1.png");
  document.querySelector("#result").classList.add("invisible");
}

function randomDice() {
  var choice = Math.floor(Math.random() * 6) + 1;
  return "dice" + choice + ".png";
}

function putDiceImage(id, image) {
  var dice = document.querySelector(id);
  dice.setAttribute("src", image);
}
