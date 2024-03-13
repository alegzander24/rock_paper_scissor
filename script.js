function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3)
   

    switch(randomNum){
        case 0: 
            return "rock";
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }

    
};


function getPlayerSelection(){
    return prompt("choose Rock, Paper or Scissors").toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return false;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return true;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return true;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return false;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return false;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return true;
    } else {
        return "It's a tie!";
    }
  }

function playGame(){
    let playerScore = 0
    let computerScore = 0
    for (let i = 1; i <=5; i++){
        const result = playRound(getPlayerSelection(), getComputerChoice());
        if (result === true) {
            playerScore++;
        } else if (result === false) {
            computerScore++;
        }
    }
    if (playerScore> computerScore){
        console.log(`you win ${playerScore} to ${computerScore}`)    
    }else if (playerScore === computerScore){
        console.log(`its a tie ${playerScore} to ${computerScore}`)    

    }else {
        console.log(`you lost ${playerScore} to ${computerScore}`)
    }
}

playGame()

