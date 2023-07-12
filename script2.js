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
  rockLost.className = "fa-sharp fa-regular fa-hand-back-fist rock-choice";

  let paperLost = document.createElement("i");
  paperLost.className = "fa-sharp fa-regular fa-hand paper-choice";

  let scissorsLost = document.createElement("i");
  scissorsLost.className =
    "fa-sharp fa-regular fa-hand-scissors scissors-choice";

  const choiceContainer = document.createElement("div");
  choiceContainer.id = "choice-div";
  choiceContainer.textContent = `CHOOSE BETWEEN ONE OF THE FOLLOWING OPTIONS`;
  choiceContainer.appendChild(lineBreak);
  choiceContainer.appendChild(rockLost);
  choiceContainer.appendChild(paperLost);
  choiceContainer.appendChild(scissorsLost);
  document.body.appendChild(choiceContainer);
} /* end of the function showOptions */

function getPlayerChoice() {
  let playerSelection;
  let clickRock = document.querySelector(".rock-choice");
  let clickPaper = document.querySelector(".paper-choice");
  let clickScissors = document.querySelector(".scissors-choice");

  clickRock.addEventListener("click", () => {
    playerSelection = `rock`;
  });

  clickPaper.addEventListener("click", () => {
    playerSelection = `paper`;
  });

  clickScissors.addEventListener("click", () => {
    playerSelection = `scissors`;
  });

  if (clickRock) {
    return (playerSelection = `rock`);
  } else if (clickPaper) {
    return (playerSelection = `paper`);
  } else if (clickScissors) {
    return (playerSelection = `scissors`);
  }
} /* end of the function getPlayerChoice() */

function playRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

  let versusIcon = document.createElement("i");
  versusIcon.className = "fa-solid fa-x";

  let loadingIcon = document.createElement("i");
  loadingIcon.className = "fa-regular fa-loader fa-spin";

  let rockWins = document.createElement("i");
  rockWins.className = "fa-sharp fa-regular fa-hand-back-fist fa-beat-fade";

  let paperWins = document.createElement("i");
  paperWins.className = "fa-sharp fa-regular fa-hand fa-beat-fade";

  let scissorsWins = document.createElement("i");
  scissorsWins.className = "fa-sharp fa-regular fa-hand-scissors fa-beat-fade";

  const matchContainer = document.createElement("div");
  matchContainer.id = "match-div";

  if (playerSelection === computerSelection) {
  }
}
/*
  if (playerSelection === computerSelection) {
    roundResults.push("Tie");
    console.log(`Round ${round}: It's a tie!`);
  } else if (
    (playerSelection === `rock` && computerSelection === `scissors`) ||
    (playerSelection === `paper` && computerSelection === `rock`) ||
    (playerSelection === `scissors` && computerSelection === `paper`)
  ) {
    roundResults.push(`Player`);
    console.log(`Round ${round}: You won this round!`);
  } else {
    roundResults.push(`Computer`);
    console.log(`Round ${round}: You lost this round!`);
  }
} /*end of the function playRound()*/

showOptions();
getPlayerChoice();
