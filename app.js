/* SCROLL DOWN FOR ACTUAL CODE

function playRound(playerSelection, computerSelection){
    if(playerSelection == 1){
        if(computerSelection == 1){
            console.log("Draw");
            return 0;
        }
        else if(computerSelection == 2){
            console.log("Computer Wins");
            return 2;
        }
        else{
            console.log("Player Wins");
            return 1;
        }
    }
    else if(playerSelection == 2){
        if(computerSelection == 1){
            console.log("Player Wins");
            return 1;
        }
        else if(computerSelection == 2){
            console.log("Draw");
            return 0;
        }
        else{
            console.log("Computer Wins");
            return 2;
        }
    }
    else{
        if(computerSelection == 1){
            console.log("Computer Wins");
            return 2;
        }
        else if(computerSelection == 2){
            console.log("Player Wins");
            
            return 1;
        }
        else{
            console.log("Draw");
            return 0;
        }
    }
}

function playerInput(){
    let playerVal = prompt("Make a choice").toLowerCase();
    let choice;
    if (playerVal == "rock"){
        console.log("player choice: rock");
        choice = 1;
    return choice;
    } 
    else if (playerVal == "paper"){
        console.log("player choice: paper");
        choice = 2;
        return choice;
    }
    else if (playerVal == "scissors" || playerVal == "scissor"){
        console.log("player choice: scissors");
        choice = 3;
        return choice;
    }
    console.log("choice is: " + choice);
}

function game(){
    let playerScore = 0;
    let compScore = 0;
    let winner = false;
    while(winner == false){
        console.log("Player score is: " + playerScore);
        console.log("Computer score is: " + compScore);
        if(playerScore == 5){
            console.log("The player wins!");
            winner = true;
        }
        else if(compScore == 5){
            console.log("The computer wins!");
            winner = true;
        }
        else{
            let playerSelection = playerInput();
            let computerSelection = computerPlay();
            let victor = playRound(playerSelection, computerSelection);
            if(victor == 1){
                playerScore = playerScore + 1;
            }
            else if (victor == 2){
                compScore = compScore + 1;
            }
        }
        
    }
    
}
*/



let playerScore = 0;
let compScore = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay(){
    let num = getRandomInt(1, 3);   
    if(num === 1){
        console.log("Comp choice: Rock"); //debugging
        return num;
    }
    else if (num === 2){
        console.log("Comp choice: Paper"); //debugging
        return num;
    }
    else{
        console.log("Comp choice: Scissors"); //debugging
        return num;
    }
}

function getWinner(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 0;
    }
    else if (
        (playerSelection === 1 && computerSelection === 3) ||
        (playerSelection === 2 && computerSelection === 1) ||
        (playerSelection === 3 && computerSelection === 2)){
            return 1;
        }
    else if(
        (playerSelection === 1 && computerSelection === 2) ||
        (playerSelection === 2 && computerSelection === 3) ||
        (playerSelection === 3 && computerSelection === 1)){
            return 2;
        }  
        
    if (isGameOver()) finalResult();
}

function updateScore(winner){
    const scoreShow = document.getElementById('result-shout');
    const playerScoreShow = document.getElementById('player-score');
    const compScoreShow = document.getElementById('comp-score');

    if (winner === 0){
        scoreShow.textContent ="Draw!";
    }
    else if(winner === 1){
        scoreShow.textContent = "You won!";
        playerScore++;
    }
    else if(winner === 2){
        scoreShow.textContent = "Computer won!";
        compScore++;
    }

    playerScoreShow.textContent = `Player: ${playerScore}`;
    compScoreShow.textContent = `Computer: ${compScore}`;


}

function updatePlayerChoice(playerSelection){
    const playerChoice = document.getElementById('player-choice');

    if (playerSelection == 1){
        playerChoice.textContent = 'You chose: Rock';
    } else if(playerSelection == 2){
        playerChoice.textContent = 'You chose: Paper'; 
    } else if(playerSelection == 3){
        playerChoice.textContent = 'You chose: Scissors';
    }    
}

function updateCompChoice(computerSelection){
    const compChoice = document.getElementById('comp-choice');

    if (computerSelection == 1){
        compChoice.textContent = 'The computer chose:  Rock';
    } else if(computerSelection == 2){
        compChoice.textContent = 'The computer chose:  Paper'; 
    } else if(computerSelection == 3){
        compChoice.textContent = 'The computer chose:  Scissors';
    }
}

function playRoundNew(e){
    if(isGameOver()){
        alert("Game over, press f5 to play again!");
    return;
    }
    //else
    let btnID = e.target.id;
    let playerSelection;
    let computerSelection;

    if (btnID == 'rock'){
        playerSelection = 1;
    }
    else if (btnID == 'paper'){
        playerSelection = 2;
    }
    else{
        playerSelection = 3;
    }
    computerSelection = computerPlay();
      
    updateScore(getWinner(playerSelection, computerSelection));
    updatePlayerChoice(playerSelection);
    updateCompChoice(computerSelection);
}

function isGameOver() {
    return playerScore === 5 || compScore === 5;
}

function finalResult(){
    return playerScore > computerScore
    ? (scoreShow.textContent = "Game over, you won")
    : (scoreShow.textContent = "Game over, you lost");
}

function addTransition(e){
    this.classList.add('active');
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip if not transform
    this.classList.remove('active');
}
//game();
const btn = document.querySelectorAll('.box');
btn.forEach((button) => button.addEventListener("click", playRoundNew));
btn.forEach((button) => button.addEventListener("click", addTransition));
btn.forEach((button) => button.addEventListener("transitionend", removeTransition));