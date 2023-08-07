function getComputerChoice() {
    const plays = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * plays.length);
    const computerChoice = plays[randomIndex];
    return computerChoice;
  }
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      return "It's a tie";
    } else if (
      (playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissors" && computerSelection == "paper")
    ) {
      return "win";
    } else {
      return "lose";
    }
  }
  
  let player = 0;
  let comp = 0;
  let roundsPlayed = 0;

  function game(playerSelection) {
    roundsPlayed++;
    if (roundsPlayed >= 6) {
        console.log("Game Over");
        if (comp > player) {
            document.getElementById('game-result').textContent = "You lose"
        }
        else if (comp < player) {
            document.getElementById('game-result').textContent = "You Win"
        }
        else {
            document.getElementById('game-result').textContent = "Draw"
        }
        return

    }
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
  
    const result = playRound(playerSelection.toLowerCase(), computerSelection);
    if (result == "win") {
      player = player + 1;
    } else if (result == "lose") {
      comp = comp + 1;
    } else {
      player = player + 1;
      comp = comp + 1;
    }
    document.getElementById('player-score').textContent = player;
    document.getElementById('computer-score').textContent = comp;
    document.getElementById('rounds-played').textContent = roundsPlayed;
    
  
    console.log("Player Score:", player);
    console.log("Computer Score:", comp);
  }
  
  const rockButton = document.getElementById('rock');
  const paperButton = document.getElementById('paper');
  const scissorsButton = document.getElementById('scissors');
  const clearButton = document.getElementById('clear');

  
  rockButton.addEventListener('click', () => game('rock'));
  paperButton.addEventListener('click', () => game('paper'));
  scissorsButton.addEventListener('click', () => game('scissors'));
  clearButton.addEventListener('click', () => {
    player = 0;
    comp = 0;
    roundsPlayed = 0;
    document.getElementById('player-score').textContent = player;
    document.getElementById('computer-score').textContent = comp;
    document.getElementById('rounds-played').textContent = roundsPlayed;
    document.getElementById('game-result').textContent = "";
  });