const gameOptions = [`rock`, `paper`, `scissors`];
let roundResults = [];

function getComputerChoice() {
  let ComputerRandomSelection =
    gameOptions[Math.floor(gameOptions.length * Math.random())];

  return ComputerRandomSelection;
} /*end of the function getComputerChoice()*/

function getPlayerChoice() {
  let PlayerSelection = prompt(`write "ROCK", "PAPER" or "SCISSORS"`);

  if (
    PlayerSelection === null ||
    PlayerSelection === undefined ||
    !gameOptions.includes(PlayerSelection.toLowerCase())
    // checks if PlayerSelection contains one of the 3 values provided at gameOptions array
  ) {
    alert(`You have to type one of the options: ROCK, PAPER, or SCISSORS`);
    return getPlayerChoice();
  }

  return PlayerSelection.toLowerCase();
} /*end of the function getPlayerChoice()*/

function playRound(round) {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

  // conditional statements for each one of the scenarios in the round

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

function visuals() {
  //const playerSelection = getPlayerChoice();
  //const computerSelection = getComputerChoice();

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
} /* end of the function visuals() */
/**
<i class="fa-sharp fa-regular fa-hand-scissors fa-beat-fade"></i>
 */
visuals();
/*
function roundVisuals() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

  const rockPicture = document.createElement(
    `<i class="fa-sharp fa-light fa-hand-back-fist fa-bounce"></i>`
  );
  // rockPicture.src = "imgs/Rock.jpg";

  const paperPicture = document.createElement(
    `<i class="fa-sharp fa-light fa-hand-back-fist fa-bounce"></i>`
  );
  // paperPicture.src = "imgs/Paper.jpg";

  const scissorsPicture = document.createElement(
    `<i class="fa-sharp fa-light fa-hand-back-fist fa-bounce"></i>`
  );
  // scissorsPicture.src = "imgs/Scissors.jpg";

  const matchContainer = document.getElementById(`match-div`);
  let versusTxt = document.createElement("p");
  versusTxt.textContent = `X`;

  if (playerSelection === `rock` && computerSelection === `rock`) {
    matchContainer.appendChild(rockPicture);
    matchContainer.appendChild(versusTxt);
    matchContainer.appendChild(rockPicture.cloneNode(true));
    matchContainer.innerHTML(`<br>`);
    matchContainer.textContent = `It's a tie!`;
  } else if (playerSelection === `paper` && computerSelection === `paper`) {
    matchContainer.appendChild(paperPicture);
    matchContainer.appendChild(versusTxt);
    matchContainer.appendChild(paperPicture.cloneNode(true));
    matchContainer.innerHTML(`<br>`);
    matchContainer.textContent = `It's a tie!`;
  } else if (
    playerSelection === `scissors` &&
    computerSelection === `scissors`
  ) {
    matchContainer.appendChild(scissorsPicture);
    matchContainer.appendChild(versusTxt);
    matchContainer.appendChild(scissorsPicture.cloneNode(true));
    matchContainer.innerHTML(`<br>`);
    matchContainer.textContent = `It's a tie!`;
  }
}

var container = document.getElementById('container');
container.appendChild(img);
*/

function logWins() {
  let playerWins = roundResults.filter((result) => result === "Player").length;
  let computerWins = roundResults.filter(
    (result) => result === "Computer"
  ).length;
  let tiedGames = roundResults.filter((result) => result === "Tie").length;

  console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
  console.log("Results:");
  console.log(`Player Wins: ${playerWins}`);
  console.log(`Computer Wins: ${computerWins}`);
  console.log(`Ties: ${tiedGames}`);

  if (playerWins > computerWins) {
    console.log(`You won the game!`);
  } else if (computerWins > playerWins) {
    console.log(`You lost the game`);
  } else {
    console.log(`The game tied!`);
  }
  console.log(`_____________________________________________`);
}

function playGame() {
  for (let roundNumber = 1; roundNumber <= 5; roundNumber++) {
    playRound(roundNumber);
  }
} /*end of the function playGame()*/

/*
function gameExecution() {
  playGame();
  logWins();
}
*/
