function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay(){
    let num = getRandomInt(1, 3);
    console.log(num);
    
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
            return
        }
        else if(computerSelection == 2){
            console.log("Computer Wins");
            return
        }
        else{
            console.log("Player Wins");
            return
        }
    }
    else if(playerSelection == 2){
        if(computerSelection == 1){
            console.log("Player Wins");
            return
        }
        else if(computerSelection == 2){
            console.log("Draw");
            return
        }
        else{
            console.log("Computer Wins");
            return
        }
    }
    else{
        if(computerSelection == 1){
            console.log("Computer Wins");
            return
        }
        else if(computerSelection == 2){
            console.log("Player Wins");
            return
        }
        else{
            console.log("Draw");
            return
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

const playerSelection = playerInput();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
