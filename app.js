const displayComputer = document.getElementById("computer-choice");
const displayUser = document.getElementById("user-choice");
const displayResult = document.getElementById("result");
const choices = document.querySelectorAll("button");

let userChoice

choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    displayUser.textContent = userChoice
    generateComputerChoice()
}))

function generateComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0) {
        computerChoice = "rock"
    } else if (computerChoice === 1) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    displayComputer.textContent = computerChoice
    
}