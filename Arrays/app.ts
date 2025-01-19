let numbers: number[] = [39,5,4,86,12,546,8,2,0.3,64,1,3,6,9,7,11,12];
numbers.push(11);
numbers.push(12);
alert(numbers);
function getMaxNumber(arr: number[]): number {
    return Math.max(...arr);
}
function getMinNumber(arr: number[]): number {
    return Math.min(...arr);
}
alert(getMaxNumber(numbers));
alert(getMinNumber(numbers));

function getAverage(arr: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
alert("the average is: " + getAverage(numbers));

function getSum(arr: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
alert("the sum is: " + getSum(numbers));
