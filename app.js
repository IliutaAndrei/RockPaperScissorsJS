let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let choice = prompt("Enter your choice: ");
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    choice = prompt("Enter again a valid value: ");
    return choice;
  }
}

function playgame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    const ROCK = "ROCK";
    const PAPER = "PAPER";
    const SCISSORS = "SCISSORS";

    if (
      (humanChoice === ROCK && computerChoice === PAPER) ||
      (humanChoice === PAPER && computerChoice === SCISSORS) ||
      (humanChoice === SCISSORS && computerChoice === ROCK)
    ) {
      console.log(
        `Computer wins! ${computerChoice.toLowerCase()} beats ${humanChoice.toLowerCase()}.`
      );
      computerScore++;
    } else if (
      (humanChoice === ROCK && computerChoice == SCISSORS) ||
      (humanChoice === PAPER && computerChoice === ROCK) ||
      (humanChoice === SCISSORS && computerChoice === PAPER)
    ) {
      console.log(
        `You wins! ${humanChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}.`
      );
      humanScore++;
    } else {
      console.log("Tie");
    }
  }

  playRound(getHumanChoice(), getComputerChoice())
  playRound(getHumanChoice(), getComputerChoice())
  playRound(getHumanChoice(), getComputerChoice())
  playRound(getHumanChoice(), getComputerChoice())
  playRound(getHumanChoice(), getComputerChoice())

  if(humanScore > computerScore) {
    alert(`Human has won! ${humanScore}-${computerScore}`)
  } else {
    alert(`Computer has won! ${humanScore}-${computerScore}`)
  }
}

playgame()
