// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDiplay = document.getElementById('player-choice');
const result = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')
let playerChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  playerChoice = e.target.id
  playerChoiceDiplay.innerHTML = playerChoice 
}))
/*  getComputerMove() method uses Random class method will print and return the computer move. */
function gernerateComputerChoice {
  let randomNumber = Math.floor(Math.random() * 3) +1
  if (randomNumber === 1) {
    computerChoice = 'rock';
  } if (randomNumber === 2) {
    computerChoice = 'paper';
  } if (randomNumber === 3) {
    computerChoice = 'scissors';
  } 
  computerChoiceDisplay.innerHTML = computerChoice;
}