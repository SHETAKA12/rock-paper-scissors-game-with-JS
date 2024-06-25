const displayComputer = document.getElementById("computer-choice");
const displayUser = document.getElementById("user-choice");
const displayResult = document.getElementById("result");
const choices = document.querySelectorAll("button");

let userChoice
let computerChoice
let result
choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    displayUser.textContent = userChoice
    generateComputerChoice()
    console.log(result)
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    
    if (randomNumber === 0) {
        computerChoice = "rock"
    } else if (randomNumber === 1) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    displayComputer.textContent = computerChoice
   
    
}

function getResult() {
    if (computerChoice === userChoice){
        result = "It's a tie!"
    }

    if (computerChoice === "Rock" && userChoice === "Paper"){
        result = "You win!"
    }

    if (computerChoice === "Rock" && userChoice === "Scissors"){
        result = "You lose!"
    }

    if (computerChoice === "Paper" && userChoice === "Rock"){
        result = "You lose!"
    }

    if (computerChoice === "Paper" && userChoice === "Scissors"){
        result = "You win!"
    }

    if (computerChoice === "Scissors" && userChoice === "Rock"){
        result = "You win!"
    }

    if (computerChoice === "Scissors" && userChoice === "Paper"){
        result = "You lose!"
    }
    displayResult.innerHTML = result

}

