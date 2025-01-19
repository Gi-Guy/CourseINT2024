var numbers = [39, 5, 4, 86, 12, 546, 8, 2, 0.3, 64, 1, 3, 6, 9, 7, 11, 12];
numbers.push(11);
numbers.push(12);
alert(numbers);
function getMaxNumber(arr) {
    return Math.max.apply(Math, arr);
}
function getMinNumber(arr) {
    return Math.min.apply(Math, arr);
}
alert(getMaxNumber(numbers));
alert(getMinNumber(numbers));
