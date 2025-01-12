let userInput = prompt('Enter your guess');
let guess = Number(userInput);

while(isNaN(guess)){
    userInput = prompt('Please enter a valid number');
    guess = Number(userInput);
}


let difficultyUserInput = prompt('Enter the difficulty level');
let difficulty = Number(difficultyUserInput);

while(isNaN(difficulty)){
    difficultyUserInput = prompt('Please enter a valid number');
    difficulty = Number(difficultyUserInput);
}
