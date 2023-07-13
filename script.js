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

getPlayerChoice((choice) => {
  playerSelection = choice;
  console.log(playerSelection);
});
