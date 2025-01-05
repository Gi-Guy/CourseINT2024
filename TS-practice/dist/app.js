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
var item = prompt('Enter the item you want to buy');
if (item) {
    alert("wow! " + item + " is a great choice!");
}
// Taking from user two numbers and sum them
var number1Input = prompt('Enter the first number');
var number2Input = prompt('Enter the second number');
if (number1Input && number2Input) { //check if the user entered the numbers
    var number1 = Number(number1Input);
    var number2 = Number(number2Input);
    if (!isNaN(number1) && !isNaN(number2)) {
        alert("The sum of the numbers is " + (number1 + number2));
    }
    else {
        alert('Please enter valid numbers');
    }
}
// accept two numbers and return the ratio of the two numbers
var number1toRatio = prompt('Enter the first number');
var number2toRatio = prompt('Enter the second number');
if (number1toRatio && number2toRatio) { //check if the user entered the numbers
    var number1 = Number(number1toRatio);
    var number2 = Number(number2toRatio);
    if (!isNaN(number1) && !isNaN(number2)) {
        alert("The ratio of the numbers is " + number1 / number2);
    }
    else {
        alert('Please enter valid numbers');
    }
}
// accept two numbers and return the length of hypotenous
var number1toHypotenous = prompt('Enter the first number');
var number2toHypotenous = prompt('Enter the second number');
if (number1toHypotenous && number2toHypotenous) { //check if the user entered the numbers
    var number1 = Number(number1toHypotenous);
    var number2 = Number(number2toHypotenous);
    if (!isNaN(number1) && !isNaN(number2)) {
        alert("The length of hypotenous is " + Math.sqrt(number1 * number1 + number2 * number2));
    }
    else {
        alert('Please enter valid numbers');
    }
}
