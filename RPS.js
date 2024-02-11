const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

function getPlayerChoice(){
    const input = prompt("type rock, paper, scissors:");
    return input;
}

function playround(getComputerChoice, getPlayerChoice){
    if(getComputerChoice === getPlayerChoice){
        return "It's tie";
    }
     if(getPlayerChoice === "rock" && getComputerChoice === "scissors" ||
     getPlayerChoice === "paper" && getComputerChoice === "rock" ||
     getPlayerChoice === "scissors" && getComputerChoice === "paper" ){
        return "you win";
     }
     else {
        return "you lose";
     }
    }
function playgame(){
    let playerwins = 0;
    let computerwins = 0;

    for(let i = 1; i <= 5; i++){
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    console.log("round result " + (i+0) + ":");
    console.log("you chose: " + playerChoice);
    console.log("computer chose: " + computerChoice);

    const roundresult = playround(playerChoice, computerChoice);
    console.log(roundresult);

    if(roundresult === "you win"){
        playerwins++;
    }
    else if(roundresult === "you lose"){
        computerwins++;
    }
    console.log("~~~~~~~~~");
  }
  
  console.log("Final result:");
  console.log("Player: " + playerwins);
  console.log("Computer: " + computerwins);
  console.log("~~~~~~~~~~");

  if(playerwins > computerwins){
    console.log("You're win");
  }
  else if(playerwins < computerwins){
    console.log("You loose");
  }
}

playgame();