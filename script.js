const gameOptions = [`rock`, `paper`, `scissors`];
const lineBreak = document.createElement("br");


function getComputerChoice() {
  let ComputerRandomSelection =
    gameOptions[Math.floor(gameOptions.length * Math.random())];

  return ComputerRandomSelection;
} /* end of the function getComputerChoice() */

function getPlayerChoice () {
  
  // creating the game icons
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

  // creating the click events for each of the icons
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
  console.log(playerChoice);
} /* end of the function getPlayerChoice() */

