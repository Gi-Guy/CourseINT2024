
// // Taking from user what food he likes
// const item = prompt('Enter the item you want to buy');
// alert('wow! ' + item + ' is a great choice!');

// // Taking from user two numbers and sum them
// const number1 = Number(prompt('Enter the first number')); //Number convert the string to number
// const number2 = Number(prompt('Enter the second number'));  
// //alert the sum of the numbers
// alert('The sum of the numbers is ' + (number1 + number2));
// ^ The code in js ^

// Taking from user what food he likes
const item: string | null = prompt('Enter the item you want to buy');
if (item) {
    alert(`wow! ${item} is a great choice!`);
}

// Taking from user two numbers and sum them
const number1Input: string | null = prompt('Enter the first number');
const number2Input: string | null = prompt('Enter the second number');

if (number1Input && number2Input) {//check if the user entered the numbers
    const number1: number = Number(number1Input);
    const number2: number = Number(number2Input);
    
    if (!isNaN(number1) && !isNaN(number2)) {
        alert(`The sum of the numbers is ${number1 + number2}`);
    } else {
        alert('Please enter valid numbers');
    }
}

// accept two numbers and return the ratio of the two numbers
const number1toRatio: string | null = prompt('Enter the first number');
const number2toRatio: string | null = prompt('Enter the second number');

if (number1toRatio && number2toRatio) {//check if the user entered the numbers
    const number1: number = Number(number1toRatio);
    const number2: number = Number(number2toRatio);
    
    if (!isNaN(number1) && !isNaN(number2)) {
        alert(`The ratio of the numbers is ${number1 / number2}`);
    } else {
        alert('Please enter valid numbers');
    }
}

// accept two numbers and return the length of hypotenous
const number1toHypotenous: string | null = prompt('Enter the first number');
const number2toHypotenous: string | null = prompt('Enter the second number');

if (number1toHypotenous && number2toHypotenous) {//check if the user entered the numbers
    const number1: number = Number(number1toHypotenous);
    const number2: number = Number(number2toHypotenous);
    
    if (!isNaN(number1) && !isNaN(number2)) {
        alert(`The length of hypotenous is ${Math.sqrt(number1 * number1 + number2 * number2)}`);
    } else {
        alert('Please enter valid numbers');
    }
}


// class practices  05/01/2025
const userAge = Number(prompt("What is your age?"));
const userHeightInCm = Number(prompt("What is your height? (cm)"));

// Logic:
// Older than 8 y/o
// At least 140cm tall
// Or above 18 y/o

// Output: "You can board the ride!" or "Go home"

if ((userAge >= 8 && userHeightInCm >= 140) || userAge >= 18) {
  alert("You can board the ride!");
} else {    
    alert("Go home");
}
