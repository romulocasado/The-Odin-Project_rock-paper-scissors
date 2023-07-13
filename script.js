const gameOptions = [`rock`, `paper`, `scissors`];
const lineBreak = document.createElement("br");
let playerSelection = ``;

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

function playGame(playerSelection, computerSelection) {
  // creating the icons the player will see in the Results container
  let versusIcon = document.createElement("i");
  versusIcon.className = "fa-solid fa-x";

  let waitingIcon1 = document.createElement("i");
  waitingIcon1.className = "fa-solid fa-question fa-spin";
  let waitingIcon2 = document.createElement("i");
  waitingIcon2.className = "fa-solid fa-question fa-spin";

  /*
*  These are class names that will be implemented depending on the conditions of the game, where they will change the waitingIcon 1 and 2 to the corresponding match icons

  .className = "fa-sharp fa-regular fa-hand-back-fist fa-beat-fade";

  .className = "fa-sharp fa-regular fa-hand fa-beat-fade";

  .className = "fa-sharp fa-regular fa-hand-scissors fa-beat-fade";
*/

  const resultsContainer = document.createElement("div");
  resultsContainer.id = "results-div";

  let resultText = document.createElement("p");
  resultText.id = "result-text";
  resultText.textContent = `IT'S A TIE!`;

  document.body.appendChild(resultsContainer);
  resultsContainer.textContent = `RESULTS`;
  resultsContainer.appendChild(lineBreak);
  resultsContainer.appendChild(waitingIcon1);
  resultsContainer.appendChild(versusIcon);
  resultsContainer.appendChild(waitingIcon2);
  resultsContainer.appendChild(resultText);
}

getPlayerChoice((playerSelection) => {
  const computerSelection = getComputerChoice();

  console.log(playerSelection);
});
