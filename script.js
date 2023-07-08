
//Get a random computer output
function getComputerOutput() {
const random  = Math.random();


return (random < 0.33) ? "Rock" : (random > 0.66) ? "Paper" : "Scissors";
}


function playRound(computerSelection , userSelection) {


}

//Get user input and make it lower case
const userSelection = prompt("What's your move?").toLowerCase();
const computerSelection = getComputerOutput();
console.log(computerSelection);


/* 






check to see if the player lost or won
display the appropiate message

*/