const displayComputer = document.getElementById("computer-choice");
const displayUser = document.getElementById("user-choice");
const displayResult = document.getElementById("result");
const choices = document.querySelectorAll("button");

let userChoice

choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id
    displayUser.textContent = userChoice
    // generateComputerChoice()
}))