let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

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
    scoreBoard.textContent = `Computer wins! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase()} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()}.`;
    computerScore++;
  } else if (
    (humanChoice === ROCK && computerChoice == SCISSORS) ||
    (humanChoice === PAPER && computerChoice === ROCK) ||
    (humanChoice === SCISSORS && computerChoice === PAPER)
  ) {
    scoreBoard.textContent = `You wins! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1).toLowerCase()}.`;
    humanScore++;
  } else {
    scoreBoard.textContent = "Tie!";
  }

  humanScoreTab.textContent = "Human: " + humanScore;
  computerScoreTab.textContent = "Computer: " + computerScore;
  resetGame();
}

function resetGame() {
  if (humanScore === 5) {
    clearScoreboard();
    alert(`Human won!`);
  } else if (computerScore === 5) {
    clearScoreboard();
    alert(`Computer won!`);
  }
}

function clearScoreboard() {
  humanScore = 0;
  computerScore = 0;
  scoreBoard.textContent = "";
  humanScoreTab.textContent = "Human: " + humanScore;;
  computerScoreTab.textContent = "Computer: " + computerScore;
}

const buttons = document.querySelectorAll("button");
const scoreBoard = document.querySelector(".message");

let humanScoreTab = document.querySelector(".human-score");
let computerScoreTab = document.querySelector(".computer-score");

humanScoreTab.textContent = "Human: " + humanScore;
computerScoreTab.textContent = "Computer: " + computerScore;

buttons.forEach((b) =>
  b.addEventListener("click", () =>
    playRound(b.textContent, getComputerChoice())
  )
);
