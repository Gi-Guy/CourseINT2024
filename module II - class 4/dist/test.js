var userInput = prompt('Enter your guess');
var guess = Number(userInput);
while (isNaN(guess)) {
    userInput = prompt('Please enter a valid number');
    guess = Number(userInput);
}
var difficultyUserInput = prompt('Enter the difficulty level');
var difficulty = Number(difficultyUserInput);
while (isNaN(difficulty)) {
    difficultyUserInput = prompt('Please enter a valid number');
    difficulty = Number(difficultyUserInput);
}
