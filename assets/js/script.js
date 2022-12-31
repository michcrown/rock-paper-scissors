// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoiceDiplay = document.getElementById('player-choice')
const result = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let playerChoice 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
      playerChoice = e.target.id
      playerChoiceDiplay.innerHTML = playerChoice
    gernerateComputerChoice()
}))
/*  getComputerMove() method uses Random class method will print and return the computer move. */
function gernerateComputerChoice {
  var computerChoice = Math.floor(Math.random() * 5);
  if (computerChoice == 0) {
    return "ROCK";
  } else if (computerChoice == 1) {
    return "PAPER";
  } else if (computerChoice == 2) {
    return "SCISSORS";
  } else if (computerChoice == 3) {
    return "LIZZARD";
  } else if (computerChoice == 4) {
    return "SPOCK";
  }
}


/*  If playerMove and computerMove are the same, then the game is a tie or draw. */
function getWinner(playerMove, computerMove) {
  if (playerMove == computerMove) {
    return "TIE";
  } else if (playerMove == "ROCK" && computerMove == "SCISSORS") {
    return "PLAYER";
  } else if (playerMove == "ROCK" && computerMove == "LIZZARD") {
    return "PLAYER";
  } else if (playerMove == "PAPER" && computerMove == "ROCK") {
    return "PLAYER";
  } else if (playerMove == "PAPER" && computerMove == "SPOCK") {
    return "PLAYER";
  } else if (playerMove == "SCISSORS" && computerMove == "PAPER") {
    return "PLAYER";
  } else if (playerMove == "SCISSORS" && computerMove == "LIZZARD") {
    return "PLAYER";
  } else if (playerMove == "LIZZARD" && computerMove == "PAPER") {
    return "PLAYER";
  } else if (playerMove == "LIZZARD" && computerMove == "SPOCK") {
    return "PLAYER";
  } else if (playerMove == "SPOCK" && computerMove == "ROCK") {
    return "PLAYER";
  } else if (playerMove == "SPOCK" && computerMove == "SCISSORS") {
    return "PLAYER";
  } else {
    return "COMPUTER";
  }
}
/*  Else if playerMove and computerMove are different, then 3 cases are possible. */
function playToFive() {
  console.log("Let's play Rock, Paper, Scissors");
  var playerWins = 0;
  var computerWins = 0;
  while (playerWins < 5 && computerWins < 5) {
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);
    if (winner == "PLAYER") {
      playerWins += 1;
    } else if (winner == "COMPUTER") {
      computerWins += 1;
    }
    console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
  }
  return [playerWins, computerWins];
}
playToFive();