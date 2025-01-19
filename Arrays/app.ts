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