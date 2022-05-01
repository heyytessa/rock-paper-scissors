//Gameplay

let gamePlay = ['rock', 'paper', 'scissors'];
let playerScore = 0
let computerScore = 0

let rockBtn = document.getElementById('rock-button');
let paperBtn = document.getElementById('paper-button');
let scissorsBtn = document.getElementById('scissors-button');
let playerEmoji = document.getElementById('player-emoji');
let computerEmoji = document.getElementById('computer-emoji');
let roundResult = document.getElementById('round-result');
let winnerAnnouncement = document.querySelector('div');
let winner = document.createElement('p');
winnerAnnouncement.appendChild(winner);

function computerPlay() {
  let computerSelection = gamePlay[Math.floor(Math.random()*gamePlay.length)];
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {  
  if (playerSelection === 'rock') {
    playerEmoji.textContent = '🪨';
    switch (computerSelection) {
      case 'paper':
        computerEmoji.textContent = '📃';
        computerScore++;
        roundResult.textContent = 'Paper beats rock, the computer wins this round!';
        break;
      case 'scissors':
        computerEmoji.textContent = '✂️';        
        playerScore++;
        roundResult.textContent = 'Rock smashes scissors, you win this round!';
      break;
      case 'rock':
        computerEmoji.textContent = '🪨';
        roundResult.textContent = 'This round is a draw.';
      break;
    }
  } else if (playerSelection === 'paper') {
    playerEmoji.textContent = '📃';
    switch (computerSelection) {
      case 'rock':
        computerEmoji.textContent = '🪨';
        playerScore++;
        roundResult.textContent = 'Paper beats rock, you win this round!';
        break;
      case 'scissors':
        computerEmoji.textContent = '✂️';
        computerScore++;
        roundResult.textContent = 'Scissors cut paper, the computer wins this round!';
      break;
      case 'rock':
        computerEmoji.textContent = '📃';
        roundResult.textContent = 'This round is a draw.';
      break;
    }
  } else if (playerSelection == 'scissors') {
    playerEmoji.textContent = '✂️';
    switch (computerSelection) {
      case 'rock':
        computerEmoji.textContent = '🪨';
        computerScore++
        roundResult.textContent = 'Rock smashes scissors, the computer wins this round!';
        break;
      case 'paper':
        computerEmoji.textContent = '📃';
        playerScore++
        roundResult.textContent = 'Scissors cut paper, you win this round!';
      break;
      case 'scissors':
        computerEmoji.textContent = '✂️';
        roundResult.textContent = 'This round is a draw.';
      break;
    }  
  }

  let playerScorecount = document.getElementById('player-scorecount');
  playerScorecount.textContent = 'You: ' + playerScore;

  let computerScorecount = document.getElementById('computer-scorecount');
  computerScorecount.textContent = 'Computer: ' + computerScore;

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