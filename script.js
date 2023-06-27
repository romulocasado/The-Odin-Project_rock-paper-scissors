/**
**This is the Rock, Paper and Scissors console game script code, in JS

TODO

*TODO a function generating the computer's choice
*? COMPLETE

    The function must be called getComputerChoice

*TODO a function asking for the player's choice
*? COMPLETE

    The function must be called getPlayerChoice

*TODO a function calling the round
*? COMPLETE

    The function must be called playRound and take 2 other functions as parameters (playerSelection, computerSelection)

*TODO a function calling the full 5 rounds game

    The function must be called playGame and take the playRound function as a parameter
*/

const gameOptions = [`rock`, `paper`, `scissors`];

function getComputerChoice() {
  let inFunctionComputerSelection =
    gameOptions[Math.floor(gameOptions.length * Math.random())];

  return inFunctionComputerSelection;
} /**_______________________end of the function getComputerChoice()_______________________**/

function getPlayerChoice() {
  let inFunctionPlayerSelection = prompt(`write "ROCK", "PAPER" or "SCISSORS"`);

  if (
    inFunctionPlayerSelection === null ||
    inFunctionPlayerSelection === undefined ||
    !gameOptions.includes(inFunctionPlayerSelection.toLowerCase())
    // checks if the prompt contains one of the 3 values provided at gameOptions array
  ) {
    alert(`You have to write one of the options: ROCK, PAPER, or SCISSORS`);
    return getPlayerChoice();
  }

  inFunctionPlayerSelection = inFunctionPlayerSelection.toLowerCase();

  return inFunctionPlayerSelection;
} /**_______________________end of the function getPlayerChoice()_______________________**/

function playRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

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
} /**_______________________end of the function playRound()_______________________**/

function playGame() {
  for (let roundNumber = 0; roundNumber < 5; roundNumber++) {
    playRound();
  }
} /**_______________________end of the function playGame()_______________________**/
