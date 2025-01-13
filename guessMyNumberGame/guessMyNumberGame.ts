// Home Practice

// generate a random number between 1 and 10
const randomNumber: number = Math.floor(Math.random() * 10) + 1;

function isANumber(value: string): boolean {
    return !isNaN(Number(value));
}

function isGreeter(value: string): boolean {
    return Number(value) > randomNumber;
}

function isLower(value: string): boolean {
    return Number(value) < randomNumber;
}

function isCorrect(value: string): boolean {
    return Number(value) === randomNumber;
}

function breakGame(index: number, numberOfTries: string): boolean {
    return index >= Number(numberOfTries);
}

// DOM Elements
const startGameButton = document.getElementById('start-game');
const stopGameButton = document.getElementById('stop-game');
const settingsButton = document.getElementById('settings');
const submitGuessButton = document.getElementById('submit-guess');
const saveSettingsButton = document.getElementById('save-settings');

const gameArea = document.getElementById('game-area');
const settingsArea = document.getElementById('settings-area');
const guessInput = document.getElementById('guess-input') as HTMLInputElement;
const triesInput = document.getElementById('tries-input') as HTMLInputElement;

// Game State
let numberOfTries: number = 0;
let currentTries: number = 0;

// Event Listeners
startGameButton?.addEventListener('click', () => {
    gameArea?.classList.remove('hidden');
    settingsArea?.classList.add('hidden');
    currentTries = 0;
});

stopGameButton?.addEventListener('click', () => {
    alert('Game stopped.');
    location.reload();
});

settingsButton?.addEventListener('click', () => {
    gameArea?.classList.add('hidden');
    settingsArea?.classList.toggle('hidden');
});

const handleSubmitGuess = () => {
    if (!guessInput || !guessInput.value) return alert('Please enter a number.');

    const guess = guessInput.value;
    currentTries++;

    if (isGreeter(guess)) {
        alert('Your number is higher than the random number');
    } else if (isLower(guess)) {
        alert('Your number is lower than the random number');
    } else if (isCorrect(guess)) {
        alert('Congratulations! You guessed the number');
        location.reload();
    }

    if (currentTries >= numberOfTries) {
        alert('Game over. You have no more tries left.');
        location.reload();
    }
};

submitGuessButton?.addEventListener('click', handleSubmitGuess);

guessInput?.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSubmitGuess();
    }
});

saveSettingsButton?.addEventListener('click', () => {
    if (!triesInput || !triesInput.value) return alert('Please enter a valid number of tries.');

    numberOfTries = Number(triesInput.value);
    alert(`Number of tries set to: ${numberOfTries}`);
    settingsArea?.classList.add('hidden');
});
