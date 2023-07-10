const gameOptions = [`rock`, `paper`, `scissors`];

function getComputerChoice() {
  let ComputerRandomSelection =
    gameOptions[Math.floor(gameOptions.length * Math.random())];

  return ComputerRandomSelection;
} /*end of the function getComputerChoice()*/

function getPlayerChoice() {
  let inFunctionPlayerSelection = prompt(`write "ROCK", "PAPER" or "SCISSORS"`);

  if (
    inFunctionPlayerSelection === null ||
    inFunctionPlayerSelection === undefined ||
    !gameOptions.includes(inFunctionPlayerSelection.toLowerCase())
    // checks if inFunctionPlayerSelection contains one of the 3 values provided at gameOptions array
  ) {
    alert(`You have to write one of the options: ROCK, PAPER, or SCISSORS`);
    return getPlayerChoice();
  }

  inFunctionPlayerSelection = inFunctionPlayerSelection.toLowerCase();

  return inFunctionPlayerSelection;
} /*end of the function getPlayerChoice()*/

function playRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

  // conditional statements for each one of the scenarios in the round

  if (playerSelection === computerSelection) {
    return console.log(`It's a tie!`);
  } else if (playerSelection === `rock` && computerSelection === `paper`) {
    return console.log(`You Lose! Paper beats Rock!`);
  } else if (playerSelection === `rock` && computerSelection === `scissors`) {
    return console.log(`You Won! Rock beats Scissors`);
  } else if (playerSelection === `paper` && computerSelection === `rock`) {
    return console.log(`You Won! Paper beats Rock!`);
  } else if (playerSelection === `paper` && computerSelection === `scissors`) {
    return console.log(`You Lose! Scissors beats Paper!`);
  } else if (playerSelection === `scissors` && computerSelection === `rock`) {
    return console.log(`You Lose! Rock beats Scissors!`);
  } else if (playerSelection === `scissors` && computerSelection === `paper`) {
    return console.log(`You Won! Scissors beats Paper!`);
  }
} /*end of the function playRound()*/

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
  for (let roundNumber = 0; roundNumber < 5; roundNumber++) {
    playRound();
  }
} /*end of the function playGame()*/

/*
playGame();
logWins();
*/
