// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

/* Found how-to https://www.youtube.com/watch?v=RwFeg0cEZvQ */
const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDiplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')
let playerChoice;
let computerChoice;
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerChoice = e.target.id
  playerChoiceDiplay.innerHTML = playerChoice 
  gernerateComputerChoice()
  getResult()
}))
/*  getComputerMove() method uses Random class method will print and return the computer move. */
function gernerateComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 5) +1
  if (randomNumber === 1) {
    computerChoice = 'rock';
  } if (randomNumber === 2) {
    computerChoice = 'paper';
  } if (randomNumber === 3) {
    computerChoice = 'scissors';
  }
  if (randomNumber === 4) {
    computerChoice = 'lizzard';
  } 
  if (randomNumber === 5) {
    computerChoice = 'spock';
  }  
  computerChoiceDisplay.innerHTML = computerChoice;
  }

 /* if (computerChoice === playerChoice) */
 function getResult() { 
 if (computerChoice === playerChoice) {
  result = 'Tie!';
} else if (computerChoice === 'rock' && playerChoice === 'paper') {
  result = 'Yes!!';
} else if (computerChoice === 'rock' && playerChoice === 'scissors') {
  result = 'You lose!';
} else if (computerChoice === 'rock' && playerChoice === 'lizzard') {
  result = 'You lose!';
} else if (computerChoice === 'rock' && playerChoice === 'spock') {
  result = 'YES! You win!';
} else if (computerChoice === 'paper' && playerChoice === 'scissors') {
  result = 'You win!';
} else if (computerChoice === 'paper' && playerChoice === 'rock') {
  result = 'You lose!';
}

if (computerChoice === playerChoice) {
  result = 'It is a tie!';
} else if (computerChoice === 'paper' && playerChoice === 'lizzard') {
  result = 'So close!';
} else if (computerChoice === 'paper' && playerChoice === 'spock') {
  result = 'Want some ice for that burn?';
} else if (computerChoice === 'scissors' && playerChoice === 'rock') {
  result = 'Enjoy your victory lap!';
} else if (computerChoice === 'scissors' && playerChoice === 'paper') {
  result = 'Ouch, that has to hurt!';
} else if (computerChoice === 'scissors' && playerChoice === 'lizzard') {
  result = 'Well we can not all be winners.';
} else if (computerChoice === 'scissors' && playerChoice === 'spock') {
  result = 'YESS you are a winner!';
}

if (computerChoice === 'lizzard' && playerChoice === 'rock') {
  result = 'Woooo!';
} else if (computerChoice === 'lizzard' && playerChoice === 'paper') {
  result = 'YESS you are a winner!';
} else if (computerChoice === 'lizzard' && playerChoice === 'scissors') {
  result = 'VICTORY!';
} else if (computerChoice === 'lizzard' && playerChoice === 'spock') {
  result = 'Death by poison. You lose.';
} else if (computerChoice === 'spock' && playerChoice === 'rock') {
  result = 'You are a legend!';
} else if (computerChoice === 'spock' && playerChoice === 'paper') {
  result = 'You win!';
} 
if (computerChoice === 'spock' && playerChoice === 'scissors') {
  result = 'Want some ice for that burn?';
} else if (computerChoice === 'spock' && playerChoice === 'lizzard') {
  result = 'Take a bow! You are a winner!';
} else if (computerChoice === 'spock' && playerChoice === 'rock') {
  result = 'Want some ice for that burn?';
} 
resultDisplay.innerHTML = result
}

