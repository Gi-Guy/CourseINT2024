// const numbers: number[] = [];
// for (let i = 0; i < 10; i++) {
//     numbers[i] = Number(prompt("Please enter a number"));
// }
// for (let i = 0; i < 10; i++) {
//     alert(numbers[i]);
// }
function getNumbers() {
    var toContinue = confirm("Do you want to play?");
    var number2 = [];
    while (toContinue) {
        number2[number2.length] = Number(prompt("Please enter a number"));
        toContinue = confirm("Do you want to continue?");
    }
    //print the numbers
    alert(number2.join(", "));
    // for (let i = 0; i < number2.length; i++) {
    //     alert(number2[i]);
    // }
}
//getNumbers();
function subStringFromArray() {
    var toContinue = confirm("Do you want to play?");
    var stringArray = [];
    while (toContinue) {
        var input = prompt("Please enter a string");
        stringArray[stringArray.length] = input !== null ? input : "";
        toContinue = confirm("Do you want to continue?");
    }
    if (stringArray.length > 0) {
        var n = Number(prompt("Please enter a number between 0 to " + (stringArray.length - 1)));
        if (n < 0 || n >= stringArray.length) {
            while (n < 0 || n >= stringArray.length) {
                n = Number(prompt("Please enter a valid number between 0 to " +
                    (stringArray.length - 1)));
            }
            alert(stringArray[n]);
        }
        else
            alert(stringArray[n]);
    }
}
subStringFromArray();
function sortNumbers() {
    var toContinue = confirm("Do you want to play?");
    var numberArray = [];
    for (var i = 0; i < 10; i++) {
        numberArray[i] = Number(prompt("Please enter a number"));
    }
    for (var i = 0; i < numberArray.length; i++) {
        for (var j = i + 1; j < numberArray.length; j++) {
            if (numberArray[i] > numberArray[j]) {
                var temp = numberArray[i];
                numberArray[i] = numberArray[j];
                numberArray[j] = temp;
            }
        }
    }
}
