const gameOptions = [`rock`, `paper`, `scissors`];

function getComputerChoice() {
  let ComputerRandomSelection =
    gameOptions[Math.floor(gameOptions.length * Math.random())];

  return ComputerRandomSelection;
} /*end of the function getComputerChoice()*/

function getPlayerChoice() {

  let rockWins = document.createElement("i");
  rockWins.className = "fa-sharp fa-regular fa-hand-back-fist fa-beat-fade";
  let rockLost = document.createElement("i");
  rockLost.className = "fa-sharp fa-regular fa-hand-back-fist";

  let paperWins = document.createElement("i");
  paperWins.className = "fa-sharp fa-regular fa-hand fa-beat-fade";
  let paperLost = document.createElement("i");
  paperLost.className = "fa-sharp fa-regular fa-hand";

  let scissorsWins = document.createElement("i");
  scissorsWins.className = "fa-sharp fa-regular fa-hand-scissors fa-beat-fade";
  let scissorsLost = document.createElement("i");
  scissorsLost.className = "fa-sharp fa-regular fa-hand-scissors";

  const matchContainer = document.getElementById(`match-div`);
  matchContainer.textContent = `CHOOSE BETWEEN ONE OF THE OPTIONS`;
  const lineBreak = document.createElement("br");
  matchContainer.appendChild(lineBreak);
  matchContainer.appendChild(rockLost);
  matchContainer.appendChild(paperLost);
  matchContainer.appendChild(scissorsLost);


}
