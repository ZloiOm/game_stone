'use stript';

let humanScore = 0; // player (person) score
let computerScore = 0; // computer account

function getComputerChoice () {

// Generate a random number from 0 to 1
    const randomNumber = Math.random()

// Divide the range into 3 equal parts for each option
if (randomNumber < 0.33) { return "rock"}
else if (randomNumber < 0.66) { return "paper"}
else { return "scissors"}

}


function getHumanChoice() {
    const userInput = prompt('Choose: rock, paper or scissors');
    return userInput.toLowerCase(); // Convert to lower case
}


function playRound(humanChoice, computerChoice) {
    // Convert the player's choice to lowercase
    humanChoice = humanChoice.toLowerCase();
    
    console.log(`You have chosen: ${humanChoice}`);
    console.log(`The computer has chosen: ${computerChoice}`);
    // Checking the draw
  if (humanChoice === computerChoice) {
    console.log('Draw!');
    return;
  }
   // Determining the winner
   if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} wins ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lost! ${computerChoice} wins ${humanChoice}`);
  }
}


// We play 5 rounds
for (let round = 1; round <= 5; round++) {
    console.log(`\n=== Round ${round} ===`);
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
}


// Determining the winner
console.log('\n=== Game over! ===');
console.log(`Final Score: Player ${humanScore} - ${computerScore} Computer`);

if (humanScore > computerScore) {
  console.log('Congratulations! You won the game.!');
} else if (computerScore > humanScore) {
  console.log('Unfortunately, the computer won.');
} else {
  console.log('The game ended in a draw!');
}

// Let's start the game
playGame();
