var a = 5;
var b = 7;
function swap(a, b) {
    var temp = a;
    b = a;
    a = temp;
}
swap(a, b);
console.log(a === 7);
console.log(b === 5);
structuredClone;
