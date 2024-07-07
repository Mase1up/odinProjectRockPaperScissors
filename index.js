// Don't know why, but start button is staying clicked when page loads, not when clicked
// const startButtonEl = document.getElementById("start-game-btn");
// startButtonEl.addEventListener("click", console.log("Start game clicked"));

let playerScore = 0;
let computerScore = 0;

let playerScoreStatement = `Player Score: ${playerScore}`;
let computerScoreStatement = `CPU Score: ${computerScore}`;

let computerChoice
let playerChoice

function bestOfFiveGames() {
    for (let i = 0; playerScore < 3 && computerScore < 3; i++) {
        let playerScoreTally
        let computerScoreTally
        startGame();

    }
}

function startGame() {
    getChoices();
    playRound(playerChoice, computerChoice);
}


function getChoices() {
    getComputerChoice();
    getPlayerChoice();
}

function getComputerChoice() {
    // Generate random number 1 to 3
    let number = Math.floor(Math.random() * 3) + 1;
    // Assign a selection to each integer
    if (number === 1) {
        computerChoice = "ROCK";
    } else if (number === 2) {
        computerChoice = "PAPER";
    } else {
        computerChoice = "SCISSORS";
    }
}

function getPlayerChoice() {
    let userInput = prompt("Rock, Paper, or Scissors?");
    if (userInput.toUpperCase() === 'ROCK' || userInput.toUpperCase() === 'PAPER' || userInput.toUpperCase() === 'SCISSORS') {
        playerChoice = userInput.toUpperCase();
    } else {
        getPlayerChoice();
    }
}

// Write a function that player a round against the computer, accepting 2 arguments
// playerSelection and computerSelection.  Returns a string declaring the winner.
// Inputs should be case insensitive
// I had to change returns to console.log for now

function playRound(playerSelection, computerSelection) {
    // Set my statements to return based on the follow-up logic
    let playerWins = `You win!  ${playerSelection} beats ${computerSelection}.`;
    let playerLoses = `Sorry, you lost.  ${computerSelection} beats ${playerSelection}.`
    let playerTies = `It's a tie!  You both chose ${playerSelection}!`

    // Logic to decide which statement to return
    if (playerSelection === "ROCK") {
        if (computerSelection === "ROCK") {
            console.log(playerTies);
            printScore();
        } else if (computerSelection === "PAPER") {
            console.log(playerLoses);
            printScore();
        } else {
            playerScore++;
            console.log(playerWins);
            printScore();
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            playerScore++;
            console.log(playerWins);
            printScore();
        } else if (computerSelection === "PAPER") {
            console.log(playerTies);
            printScore();
        } else {
            computerScore++;
            console.log(playerLoses);
            printScore();
        }
    } else {
        if (computerSelection === "ROCK") {
            computerScore++;
            console.log(playerLoses);
            printScore();
        } if (computerSelection === "PAPER") {
            playerScore++;
            console.log(playerWins);
            printScore();
        } else {
            console.log(playerTies);
            printScore();
        }
    }
}

function printScore() {
    console.log(playerScoreStatement);
    console.log(computerScoreStatement);
}

bestOfFiveGames();

// Write a new function called game().  Use the previous function inside this one
// to play a 5 round game and declare a winner at the end.
// Can either use a loop if you already know them, or you can just call playGame()
// 5 times inside this one.
// You can modify the previous functions

// 1. Add a roundsWon counter for player and/or computer
// 2. Make a loop to run 5 games (while playerRoundsWon < 3 && computerRoundsWon < 3)
// 3. console.log() the results of each round and the winner overall
// 4. Use prompt() to get input from the user

