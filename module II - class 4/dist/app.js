// let userInput = prompt('Enter your guess');
// let guess = Number(userInput);
// while(isNaN(guess)){
//     userInput = prompt('Please enter a valid number');
//     guess = Number(userInput);
// }
// let difficultyUserInput = prompt('Enter the difficulty level');
// let difficulty = Number(difficultyUserInput);
// while(isNaN(difficulty)){
//     difficultyUserInput = prompt('Please enter a valid number');
//     difficulty = Number(difficultyUserInput);
// }
// f(x) = y
/**
 * Functions section
 *  */
// Function declaration
function devideNumber(x, y) {
    if (y === 0) {
        alert('Cannot divide by zero!');
    }
    else
        alert(x / y);
}
function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}
function superGreet(firstName, lastName) {
    alert("Hello " + capitalize(firstName) + " " + capitalize(lastName) + "!");
}
function greetFullname() {
    var fullName = prompt("Please enter your full name");
    if (fullName) {
        var names = fullName.split(" ");
        superGreet(names[0], names[1]);
    }
    else {
        alert("Full name cannot be null.");
    }
}
//devideNumber(10, 0);
capitalize;
