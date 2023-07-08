
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

  if (result == "Rockscissors" || result == "Scissorspaper" || result == "Paperrock")
   {
    ++computerScore;
    return `You Lose! You picked ${userSelection} ,but the computer picked ${computerSelection}`;
   }
   else if (result == "Rockrock" || result == "Scissorsscissors" || result == "Paperpaper") 
   {
    return `You Tied! You picked ${userSelection} ,and the computer picked ${computerSelection}`;
   }
   else if ((result == "Rockpaper" || result == "Scissorsrock" || result == "Paperscissors") )
    {
    ++userScore;
    return `You Win! You picked ${userSelection} ,and the computer picked ${computerSelection}`;
   }
}

function game()
 {
    for(let i = 1; i <= 5; ++i)
    {
    //Get user input and make it lower case
    const userSelection = prompt("What's your move?").toLowerCase();
const computerSelection = getComputerOutput();
    console.log(playRound(computerSelection, userSelection));
    console.log(userScore + "-" + computerScore);
    }
  
   return (computerScore < userScore) ? "YOU WIN :)" : (userScore < computerScore) ? "YOU LOSE :(" : "YOU TIED :/";
 }


 let userScore = 0;
 let computerScore = 0;
console.log(game());






