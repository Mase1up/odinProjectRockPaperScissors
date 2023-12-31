// Already coded the main part on the laptop, but it's having issues
// and the git commits I did didn't push.  I need to see how to fix that.
// Never tried using git from the GUI before, need to learn

// 1. Create function getComputerChoice that returns Rock, Paper, or Scissors randomly

function getComputerChoice() {
    // Generate random number 1 to 3
    let number = Math.floor(Math.random() * 3) + 1;
    // Assign a selection to each integer
    if (number === 1) {
        return "ROCK";
    } else if (number === 2) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}
// console.log(getComputerChoice()); // Test it
// console.log(playGame("paper", getComputerChoice())); // Test updated version

const playerChoice = "Paper";
const computerChoice = getComputerChoice();

console.log(playGame(playerChoice, computerChoice));


// Write a function that player a round against the computer, accepting 2 arguments
// playerSelection and computerSelection.  Returns a string declaring the winner.
// Inputs should be case insensitive

function playGame(playerSelection, computerSelection) {
    // Set playerSelection to uppercase so it's case insensitive
    playerSelection = playerSelection.toUpperCase();
    // Set my statements to return based on the follow-up logic
    let playerWins = `You win!  ${playerSelection} beats ${computerSelection}.`;
    let playerLoses = `Sorry, you lost.  ${computerSelection} beats ${playerSelection}.`
    let playerTies = `It's a tie!  You both chose ${playerSelection}!`

    // Logic to decide which statement to return
    if (playerSelection === "ROCK") {
        if (computerSelection === "ROCK") {
            return playerTies;
        } else if (computerSelection === "PAPER") {
            return playerLoses;
        } else {
            return playerWins;
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            return playerWins;
        } else if (computerSelection === "PAPER") {
            return playerTies;
        } else {
            return playerLoses;
        }
    } else {
        if (computerSelection === "ROCK") {
            return playerLoses;
        } if (computerSelection === "PAPER") {
            return playerWins;
        } else {
            return playerTies;
        }
    }
}

// Write a new function called game().  Use the previous function inside this one
// to play a 5 round game and declare a winner at the end.
// Can either use a loop if you already know them, or you can just call playGame()
// 5 times inside this one.
// You can modify the previous functions

// 1. Add a roundsWon counter for player and/or computer
// 2. Make a loop to run 5 games (while playerRoundsWon < 3 && computerRoundsWon < 3)
// 3. console.log() the results of each round and the winner overall
// 4. Use prompt() to get input from the user


