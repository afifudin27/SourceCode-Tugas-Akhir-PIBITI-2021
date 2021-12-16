const dec2bin = (a, b) =>{
    return `${a} + ${b} = ${(a + b).toString(2)}`
}

let a = dec2bin(10, 7);
console.log(a)
let b = dec2bin(13, 7);
console.log(b)