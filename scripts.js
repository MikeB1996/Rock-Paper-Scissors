//generates numbers from 0 to 2 and assigns them to the 3 choices for Rock/Paper/Scissors

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
function RockPaperScissors(playerChoice,computerChoice) {
  
  switch (true){
    case (playerChoice==="Rock" || computerChoice==="Rock"):
        alert("It's a draw");
        break;
    case (playerChoice==="Rock" || computerChoice==="Paper"):
        alert("The computer wins");
        break;
    case (playerChoice==="Rock" || computerChoice==="Scissors"):
            alert("You win");
        break;
    case (playerChoice==="Paper" || computerChoice==="Rock"):
        alert("You win");
        break;
    case (playerChoice==="Paper" || computerChoice==="Paper"):
        alert("it's a draw");
        break;
    case (playerChoice==="Paper" || computerChoice==="Scissors"):
        alert("The computer wins");
        break;
    case (playerChoice==="Scissors" || computerChoice==="Rock"):
        alert("The computer wins");
        break;
    case (playerChoice==="Scissors" || computerChoice==="Paper"):
        alert("You win");
        break;
    case (playerChoice==="Scissors" || computerChoice==="Scissors"):
        alert("it's a draw");
        break;
  }

}

//function that takes the player choice
function playerChoice(choice){
    let computerCho= getComputerChoice();
    RockPaperScissors(choice,computerCho);
}







