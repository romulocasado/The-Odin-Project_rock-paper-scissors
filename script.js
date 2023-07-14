const gameOptions = [`rock`, `paper`, `scissors`];
const lineBreak = document.createElement("br");
let playerSelection = ``;
let startGame = document.getElementById("start-button");

function getComputerChoice() {
  let ComputerRandomSelection =
    gameOptions[Math.floor(gameOptions.length * Math.random())];

  return ComputerRandomSelection;
} /* end of the function getComputerChoice() */

function getPlayerChoice(callback) {
  // creating the icons the player will choose between
  let rockIcon = document.createElement("i");
  rockIcon.className = "fa-sharp fa-regular fa-hand-back-fist";
  rockIcon.id = "rock-choice";

  let paperIcon = document.createElement("i");
  paperIcon.className = "fa-sharp fa-regular fa-hand";
  paperIcon.id = "paper-choice";

  let scissorsIcon = document.createElement("i");
  scissorsIcon.className = "fa-sharp fa-regular fa-hand-scissors";
  scissorsIcon.id = "scissors-choice";

  //creating the player's choiceContainer and putting it together
  const choiceContainer = document.createElement("div");
  choiceContainer.id = "choice-div";
  choiceContainer.textContent = `CHOOSE BETWEEN ONE OF THE FOLLOWING OPTIONS`;
  choiceContainer.appendChild(lineBreak);
  choiceContainer.appendChild(rockIcon);
  choiceContainer.appendChild(paperIcon);
  choiceContainer.appendChild(scissorsIcon);
  document.body.appendChild(choiceContainer);
  /* 
  when using a callback function in this approach, we pass a separate callback function to getPlayerChoice, and within the event listeners, we call that function with the chosen option as an argument, like callback("rock");.
  */
  let clickRock = document.getElementById("rock-choice");
  let clickPaper = document.getElementById("paper-choice");
  let clickScissors = document.getElementById("scissors-choice");

  clickRock.addEventListener("click", () => {
    callback("rock");
  });

  clickPaper.addEventListener("click", () => {
    callback("paper");
  });

  clickScissors.addEventListener("click", () => {
    callback("scissors");
  });
} /* end of the function getPlayerChoice() */

function playRound(playerSelection, computerSelection) {
  // creating the icons the player will see in the Results container
  let versusIcon = document.createElement("i");
  versusIcon.className = "fa-solid fa-x";

  let waitingIcon1 = document.createElement("i");
  waitingIcon1.className = "fa-solid fa-question fa-spin";
  let waitingIcon2 = document.createElement("i");
  waitingIcon2.className = "fa-solid fa-question fa-spin";
  /*
* These are class names that will substitute the ones on waitingIcon 1 and 2 depending on the conditions of the game

?  .className = "fa-sharp fa-regular fa-hand-back-fist fa-beat-fade";

?  .className = "fa-sharp fa-regular fa-hand fa-beat-fade";

?  .className = "fa-sharp fa-regular fa-hand-scissors fa-beat-fade";

* This will swap the waiting icons to the corresponding result icons depending on the conditions of the game
*/
  const resultsContainer = document.createElement("div");
  resultsContainer.id = "results-div";

  let resultText = document.createElement("p");
  resultText.id = "result-text";

  document.body.appendChild(resultsContainer);
  resultsContainer.textContent = `RESULTS`;
  resultsContainer.appendChild(lineBreak);
  resultsContainer.appendChild(waitingIcon1);
  resultsContainer.appendChild(versusIcon);
  resultsContainer.appendChild(waitingIcon2);
  resultsContainer.appendChild(lineBreak);
  resultsContainer.appendChild(resultText);

  if (playerSelection === `rock` && computerSelection === `rock`) {
    resultText.textContent = `IT'S A TIE!`;
    waitingIcon1.className = "fa-sharp fa-regular fa-hand-back-fist";
    waitingIcon2.className = "fa-sharp fa-regular fa-hand-back-fist";
  } else if (playerSelection === `paper` && computerSelection === `paper`) {
    resultText.textContent = `IT'S A TIE!`;
    waitingIcon1.className = "fa-sharp fa-regular fa-hand";
    waitingIcon2.className = "fa-sharp fa-regular fa-hand";
  } else if (
    playerSelection === `scissors` &&
    computerSelection === `scissors`
  ) {
    resultText.textContent = `IT'S A TIE!`;
    waitingIcon1.className = "fa-sharp fa-regular fa-hand-scissors";
    waitingIcon2.className = "fa-sharp fa-regular fa-hand-scissors";
  } else if (playerSelection === `rock` && computerSelection === `paper`) {
    resultText.textContent = `YOU LOST, Paper SWALLOWS Rock!`;
    waitingIcon1.className = "fa-sharp fa-regular fa-hand-back-fist";
    waitingIcon2.className = "fa-sharp fa-regular fa-hand fa-beat-fade";
  } else if (playerSelection === `rock` && computerSelection === `scissors`) {
    resultText.textContent = `YOU WON, Rock DESTROYS Scissors!`;
    waitingIcon1.className =
      "fa-sharp fa-regular fa-hand-back-fist fa-beat-fade";
    waitingIcon2.className = "fa-sharp fa-regular fa-hand-scissors";
  } else if (playerSelection === `scissors` && computerSelection === `paper`) {
    resultText.textContent = `YOU WON, Scissors SHREDS Paper!`;
    waitingIcon1.className =
      "fa-sharp fa-regular fa-hand-scissors fa-beat-fade";
    waitingIcon2.className = "fa-sharp fa-regular fa-hand";
  } else if (playerSelection === `scissors` && computerSelection === `rock`) {
    resultText.textContent = `YOU LOST, Rock DESTROYS Scissors!`;
    waitingIcon1.className = "fa-sharp fa-regular fa-hand-scissors";
    waitingIcon2.className =
      "fa-sharp fa-regular fa-hand-back-fist fa-beat-fade";
  } else if (playerSelection === `paper` && computerSelection === `rock`) {
    resultText.textContent = `YOU WON, Paper SWALLOWS Rock!`;
    waitingIcon1.className = "fa-sharp fa-regular fa-hand fa-beat-fade";
    waitingIcon2.className = "fa-sharp fa-regular fa-hand-back-fist";
  } else if (playerSelection === `paper` && computerSelection === `scissors`) {
    resultText.textContent = `YOU LOST, Scissors SHREDS Paper!`;
    waitingIcon1.className = "fa-sharp fa-regular fa-hand";
    waitingIcon2.className =
      "fa-sharp fa-regular fa-hand-scissors fa-beat-fade";
  }
}


startGame.addEventListener("click", () => {
  // This first part of the code removes the previous results and enables the Start Button to replay the game
  const resultsContainer = document.getElementById("results-div");
  const choiceContainer = document.getElementById("choice-div");
  if (resultsContainer) {
    resultsContainer.remove();
  }
  if (choiceContainer) {
    choiceContainer.remove();
  }

  // this part calls all the other functions we created in a logic way
  getPlayerChoice((playerSelection) => {
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    console.log(playerSelection);
  });
});
