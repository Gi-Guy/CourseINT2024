// Home Practice
// generate a random number between 1 and 10
var randomNumber = Math.floor(Math.random() * 10) + 1;
function isANumber(value) {
    return !isNaN(Number(value));
}
function isGreeter(value) {
    return Number(value) > randomNumber;
}
function isLower(value) {
    return Number(value) < randomNumber;
}
function isCorrect(value) {
    return Number(value) === randomNumber;
}
function breakGame(index, numberOfTries) {
    return index >= Number(numberOfTries);
}
// DOM Elements
var startGameButton = document.getElementById('start-game');
var stopGameButton = document.getElementById('stop-game');
var settingsButton = document.getElementById('settings');
var submitGuessButton = document.getElementById('submit-guess');
var saveSettingsButton = document.getElementById('save-settings');
var gameArea = document.getElementById('game-area');
var settingsArea = document.getElementById('settings-area');
var guessInput = document.getElementById('guess-input');
var triesInput = document.getElementById('tries-input');
// Game State
var numberOfTries = 0;
var currentTries = 0;
// Event Listeners
startGameButton === null || startGameButton === void 0 ? void 0 : startGameButton.addEventListener('click', function () {
    gameArea === null || gameArea === void 0 ? void 0 : gameArea.classList.remove('hidden');
    settingsArea === null || settingsArea === void 0 ? void 0 : settingsArea.classList.add('hidden');
    currentTries = 0;
});
stopGameButton === null || stopGameButton === void 0 ? void 0 : stopGameButton.addEventListener('click', function () {
    alert('Game stopped.');
    location.reload();
});
settingsButton === null || settingsButton === void 0 ? void 0 : settingsButton.addEventListener('click', function () {
    gameArea === null || gameArea === void 0 ? void 0 : gameArea.classList.add('hidden');
    settingsArea === null || settingsArea === void 0 ? void 0 : settingsArea.classList.toggle('hidden');
});
var handleSubmitGuess = function () {
    if (!guessInput || !guessInput.value)
        return alert('Please enter a number.');
    var guess = guessInput.value;
    currentTries++;
    if (isGreeter(guess)) {
        alert('Your number is higher than the random number');
    }
    else if (isLower(guess)) {
        alert('Your number is lower than the random number');
    }
    else if (isCorrect(guess)) {
        alert('Congratulations! You guessed the number');
        location.reload();
    }
    if (currentTries >= numberOfTries) {
        alert('Game over. You have no more tries left.');
        location.reload();
    }
};
submitGuessButton === null || submitGuessButton === void 0 ? void 0 : submitGuessButton.addEventListener('click', handleSubmitGuess);
guessInput === null || guessInput === void 0 ? void 0 : guessInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleSubmitGuess();
    }
});
saveSettingsButton === null || saveSettingsButton === void 0 ? void 0 : saveSettingsButton.addEventListener('click', function () {
    if (!triesInput || !triesInput.value)
        return alert('Please enter a valid number of tries.');
    numberOfTries = Number(triesInput.value);
    alert("Number of tries set to: " + numberOfTries);
    settingsArea === null || settingsArea === void 0 ? void 0 : settingsArea.classList.add('hidden');
});
