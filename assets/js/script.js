// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

/*  Prompt Player to enter any one of the following entries: ROCK, PAPER, SCISSORS, LIZZARD, SPOCK. */
var playerChoice = prompt("Please enter ROCK, PAPER, SCISSORS, LIZZARD, SPOCK");
/*  getPlayerMove() method uses Scanner class to get the move of the player. This method will print and return the move enter by the player. */
function getPlayerMove() {
  return playerChoice;
}
/*  getComputerMove() method uses Random class nextInt(num) method. nextInt(num) method produces the random number between 0 (inclusive) and num (exclusive). getComputerMove() method will print and return the computer move. */
function getComputerMove() {
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