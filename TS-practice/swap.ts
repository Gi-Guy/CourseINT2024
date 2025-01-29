let a = 5;
let b = 7;

function swap(a:number, b: number){
    const temp = a;
    b = a;
    a = temp;
}

swap(a,b);
console.log(a === 7);
console.log(b === 5);
structuredClone