
//Get a random computer output

function getComputerOutput()
 {
const random  = Math.random();

return (random < 0.33) ? "Rock" : (random > 0.66) ? "Paper" : "Scissors";
}

//check to see if the player lost or won

function playRound(computerSelection , userSelection)
 {

  const result = computerSelection + userSelection;

  if (result == "RockScissors" || result == "ScissorsPaper" || result == "PaperRock")
   {
    ++computerScore;
    return `You Lose! You picked ${userSelection} ,but the computer picked ${computerSelection}`;
   }
   else if (result == "RockRock" || result == "ScissorsScissors" || result == "PaperPaper") 
   {
    return `You Tied! You picked ${userSelection} ,and the computer picked ${computerSelection}`;
   }
   else if ((result == "RockPaper" || result == "ScissorsRock" || result == "PaperScissors") )
    {
    ++userScore;
    return `You Win! You picked ${userSelection} ,and the computer picked ${computerSelection}`;
   }
}


//All my variable
const buttons = document.querySelectorAll("button");
const Results = document.getElementById("Result");
const score = document.getElementById("score");
const winner = document.getElementById("winner");
let userScore = 0;
let computerScore = 0;
let over = false;

//listening to the button press
 buttons.forEach ((button) => 
 {
 
  button.addEventListener("click", () => {
  const userSelection = button.dataset.choice; 
  
  if(over == true)
  {
    userScore = 0;
    computerScore = 0;
    winner.textContent= "";
    over = false;
  }
  const roundResult = playRound(getComputerOutput(), userSelection);
  Results.textContent = roundResult;
  score.textContent = userScore + "-" + computerScore;
  if(userScore == 5 || computerScore == 5)
  {
  winner.textContent = (computerScore < userScore) ? "YOU WIN :)" : "YOU LOSE :(" ;
  over = true;
  }
  });
 });









