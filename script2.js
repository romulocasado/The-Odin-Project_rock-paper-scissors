const gameOptions = [`rock`, `paper`, `scissors`];
let roundResults = [];
const lineBreak = document.createElement("br");

function getComputerChoice() {
  let ComputerRandomSelection =
    gameOptions[Math.floor(gameOptions.length * Math.random())];

  return ComputerRandomSelection;
} /* end of the function getComputerChoice() */

function showOptions() {
  let rockLost = document.createElement("i");
  rockLost.className = "fa-sharp fa-regular fa-hand-back-fist";
  rockLost.id = "rock-choice";

  let paperLost = document.createElement("i");
  paperLost.className = "fa-sharp fa-regular fa-hand";
  paperLost.id = "paper-choice";

  let scissorsLost = document.createElement("i");
  scissorsLost.className = "fa-sharp fa-regular fa-hand-scissors";
  scissorsLost.id = "scissors-choice";

  const choiceContainer = document.createElement("div");
  choiceContainer.id = "choice-div";
  choiceContainer.textContent = `CHOOSE BETWEEN ONE OF THE FOLLOWING OPTIONS`;
  choiceContainer.appendChild(lineBreak);
  choiceContainer.appendChild(rockLost);
  choiceContainer.appendChild(paperLost);
  choiceContainer.appendChild(scissorsLost);
  document.body.appendChild(choiceContainer);

  getPlayerChoice();
} /* end of the function showOptions */

function getPlayerChoice() {
  let playerChoice = ``;
  let clickRock = document.getElementById("rock-choice");
  let clickPaper = document.getElementById("paper-choice");
  let clickScissors = document.getElementById("scissors-choice");

  clickRock.addEventListener("click", () => {
    playerChoice = `rock`;
  });

  clickPaper.addEventListener("click", () => {
    playerChoice = `paper`;
  });

  clickScissors.addEventListener("click", () => {
    playerChoice = `scissors`;
  });
} /* end of the function getPlayerChoice() */

function playRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

  let versusIcon = document.createElement("i");
  versusIcon.className = "fa-solid fa-x";

  let waitingIcon = document.createElement("i");
  waitingIcon.className = "fa-solid fa-question fa-spin";
  let waitingIcon2 = document.createElement("i");
  waitingIcon2.className = "fa-solid fa-question fa-spin";

  let rockWins = document.createElement("i");
  rockWins.className = "fa-sharp fa-regular fa-hand-back-fist fa-beat-fade";

  let paperWins = document.createElement("i");
  paperWins.className = "fa-sharp fa-regular fa-hand fa-beat-fade";

  let scissorsWins = document.createElement("i");
  scissorsWins.className = "fa-sharp fa-regular fa-hand-scissors fa-beat-fade";

  const matchContainer = document.createElement("div");
  matchContainer.id = "match-div";
  document.body.appendChild(matchContainer);
  matchContainer.textContent = `RESULTS`;
  matchContainer.appendChild(lineBreak);
  matchContainer.appendChild(waitingIcon);
  matchContainer.appendChild(versusIcon);
  matchContainer.appendChild(waitingIcon2);

  matchScenarios();
} /* end of the function playRound() */

function matchScenarios() {} /* end of the function matchScenarios() */

showOptions();
getPlayerChoice();
