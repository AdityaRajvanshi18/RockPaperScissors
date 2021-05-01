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

game();

