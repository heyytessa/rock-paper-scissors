//Gameplay

let gamePlay = ['rock', 'paper', 'scissors'];
let playerScore = 0
let computerScore = 0

let rockBtn = document.getElementById('rock-button');
let paperBtn = document.getElementById('paper-button');
let scissorsBtn = document.getElementById('scissors-button');
let winnerAnnouncement = document.querySelector('div');
let winner = document.createElement('p');
winnerAnnouncement.appendChild(winner);

function computerPlay() {
  let computerSelection = gamePlay[Math.floor(Math.random()*gamePlay.length)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {  
  if (playerSelection === computerSelection) {
  } else if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'paper':
        computerScore++;
        break;
      case 'scissors':
        playerScore++;
      break;
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'rock':
        playerScore++;
        break;
      case 'scissors':
        computerScore++;
        break;
    }
  } else if (playerSelection == 'scissors') {
    switch (computerSelection) {
      case 'rock':
        computerScore++
        break;
      case 'paper':
        playerScore++
        break;
    }
  }
  console.log(playerScore);
  console.log(computerScore);
}

//UI

rockBtn.addEventListener('click', () => game('rock'));
paperBtn.addEventListener('click', () => game('paper'));
scissorsBtn.addEventListener('click', () => game('scissors'));

function game (playerSelection) {
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);

   if (playerScore === 5) {
     winner.textContent = 'Congratulations, you won!';
    } else if (computerScore === 5) {
     winner.textContent = 'Sorry, you lost!';
    }
}