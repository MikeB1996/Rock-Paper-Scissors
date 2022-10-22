//declaration of the number of points needed to win (change in case you want it higher or lower)
const winningPoints= 5;
//declaration and initialization of the point counters
let playerPoints=0;
let computerPoints=0;

//generates numbers from 0 to 2 and assigns them to the 3 choices for 1=Rock/0=Paper/2=Scissors
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


//functions that are called when the button that indicates the player's choice is clicked and 
//calls the function that plays the game
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
    let Winner = document.getElementById("Winner");
  switch (true){
    case (playerChoice==="Rock" || computerChoice==="Rock"):
        Winner.innerHTML="I'ts a draw";
        winValue= 0;
        return winValue;
        break;
    case (playerChoice==="Rock" || computerChoice==="Paper"):
        Winner.innerHTML="The Computer won this round";
        winValue= 1;
        return winValue;
        break;
    case (playerChoice==="Rock" || computerChoice==="Scissors"):
        Winner.innerHTML="You won this round";
        winValue= 2;
        return winValue;
        break;
    case (playerChoice==="Paper" || computerChoice==="Rock"):
        Winner.innerHTML="You won this round";
        winValue= 2;
        return winValue;
        break;
    case (playerChoice==="Paper" || computerChoice==="Paper"):
        Winner.innerHTML="I'ts a draw";
        winValue= 0;
        return winValue;
        break;
    case (playerChoice==="Paper" || computerChoice==="Scissors"):
        PcWinner.innerHTML="The Computer won this round";
        winValue= 1;
        return winValue;
        break;
    case (playerChoice==="Scissors" || computerChoice==="Rock"):
        Winner.innerHTML="The Computer won this round";
        winValue= 1;
        return winValue;
        break;
    case (playerChoice==="Scissors" || computerChoice==="Paper"):
        Winner.innerHTML="You won this round";
        winValue= 2;
        return winValue;
        break;
    case (playerChoice==="Scissors" || computerChoice==="Scissors"):
        Winner.innerHTML="I'ts a draw";
        winValue= 0;
        return winValue;
        break;
  }


}

//function that takes the player choice
function playerChoice(choice){
    let computerCho= getComputerChoice();
    let Win= RockPaperScissors(choice,computerCho);
    game(Win);
}


// it manages who wins (so the first to get 5 points)
function game(whoWins) {
    //increases the counter of who won this round or does nothing if it's a draw
    if (whoWins==0) {

    } else if (whoWins==1) {
        computerPoints+=1;
        let PCpoints = document.getElementById('PcPoints') ;
        PCpoints.innerHTML= computerPoints;
    } else {
        playerPoints+=1;
        let MYpoints = document.getElementById('MyPoints') ;
        MYpoints.innerHTML= playerPoints;
    }

    //checks if the game should end or not
    if (playerPoints>=5) {
        let PlWinner = document.getElementById("Winner");
        PlWinner.innerHTML="You won this Game";

        gameEnd();
        return;
    } else if (computerPoints>=5) {
        let PcWinner = document.getElementById("Winner");
        PcWinner.innerHTML="The Computer won this Game";
        gameEnd();
        return;

    } else {
        let DrWinner = document.getElementById("Winner");
        //DrWinner.innerHTML="I'ts a draw";
        return;
    }
}

//disables the game buttons as the game ended leaving only reset game clickable
function gameEnd() {
    document.getElementById("groupButton").style.display = "none";
    //document.getElementById("but2").style.display = "none";
    //document.getElementById("but3").style.display = "none";

}

//restarts the game (resets all the counters) by calling start game
function resClick() {
    let Winner = document.getElementById("Winner");
    Winner.innerHTML="";
    document.getElementById("groupButton").style.display = "block";
    //document.getElementById("but2").style.display = "block";
    //document.getElementById("but3").style.display = "block";
    startGame();

    
}


//activates the other buttons after clicking start and starts the game by calling game function
//resets the counters for the win
function startGame() {
    /*document.getElementById("but1").disabled = false;
    document.getElementById("but2").disabled = false;
    document.getElementById("but3").disabled = false;
    document.getElementById("resButton").disabled = false;*/
    document.getElementById("game1").style.display = "block";
    document.getElementById("startBut").style.display = "none";
    playerPoints=0;
    computerPoints=0;
    //resets the counters that are displayed in the page too
    let PCpoints = document.getElementById('PcPoints') ;
    PCpoints.innerHTML= 0;
    let MYpoints = document.getElementById('MyPoints') ;
    MYpoints.innerHTML= 0;
}




