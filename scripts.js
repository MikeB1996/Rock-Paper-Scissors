//generates numbers from 0 to 2 and assigns them to the 3 choices for Rock/Paper/Scissors
const winningPoints= 5;


function getComputerChoice() {
    let num= Math.floor(Math.random() * 3);
    let result;
    if (num==1){
        result='Rock';
    } else if (num==0) {
        result='Paper';
    } else {
        result='Scissors'
    }
    return result;
}

let choice;


//functions that are called when the button that indicates the player's choice is clicked
function buttonClick() {
    let Choice = "Rock";
    playerChoice(Choice);
}

function buttonClick2() {
    let Choice = "Paper";
    playerChoice(Choice);   
}

function buttonClick3() {
    const Choice = "Scissors";
    playerChoice(Choice); 
}



//function that gets in input player choice and computer choice and decides who wins
// it returns winValue that show who won this round (0=draw,1= the computer won,2= the player won)
function RockPaperScissors(playerChoice,computerChoice) {
    let winValue
  switch (true){
    case (playerChoice==="Rock" || computerChoice==="Rock"):
        alert("It's a draw");
        winValue= 0;
        return winValue;
        break;
    case (playerChoice==="Rock" || computerChoice==="Paper"):
        alert("The computer wins");
        winValue= 1;
        return winValue;
        break;
    case (playerChoice==="Rock" || computerChoice==="Scissors"):
            alert("You win");
            winValue= 2;
        return winValue;
        break;
    case (playerChoice==="Paper" || computerChoice==="Rock"):
        alert("You win");
        winValue= 2;
        return winValue;
        break;
    case (playerChoice==="Paper" || computerChoice==="Paper"):
        alert("it's a draw");
        winValue= 0;
        return winValue;
        break;
    case (playerChoice==="Paper" || computerChoice==="Scissors"):
        alert("The computer wins");
        winValue= 1;
        return winValue;
        break;
    case (playerChoice==="Scissors" || computerChoice==="Rock"):
        alert("The computer wins");
        winValue= 1;
        return winValue;
        break;
    case (playerChoice==="Scissors" || computerChoice==="Paper"):
        alert("You win");
        winValue= 2;
        return winValue;
        break;
    case (playerChoice==="Scissors" || computerChoice==="Scissors"):
        alert("it's a draw");
        winValue= 0;
        return winValue;
        break;
  }


}

//function that takes the player choice
function playerChoice(choice){
    let computerCho= getComputerChoice();
    RockPaperScissors(choice,computerCho);
}


// it manages who wins (so the first to get 5 points)
function game() {

}


//restarts the game (resets all the counters)
function resClick() {

}




