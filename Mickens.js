const myArray = ['rock', 'paper', 'scissors'];

const selectButtons = document.querySelectorAll(".selections")

selectButtons.forEach(function(selection) {
    selection.addEventListener('click', function(e) {
        const computerChoice = myArray[Math.floor(Math.random() * 3)];
        const playerChoice = e.target.getAttribute('data-selection')
        console.log(playerChoice);
        userChoice(playerChoice, computerChoice)
       })
    })

   

function userChoice(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        console.log('You have tied!')
    }
    else if (playerChoice == 'rock' && computerChoice == 'paper') {
        console.log('You have lost!')
    }
    else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        console.log('You have lost!')
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        console.log('You have won!')
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
        console.log('You have won!')
    }
    else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        console.log('You have lost!')
    }
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You have won!')
    }
}
