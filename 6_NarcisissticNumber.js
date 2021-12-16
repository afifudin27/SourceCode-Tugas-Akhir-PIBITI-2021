const narcissistic = (n) =>{
    let[...str_value] = String(n);
    let pow = str_value.length;
    let result = 0;
    for(let i=0; i<pow; i++){
        result += parseInt(str_value[i]**pow);
    }
    return result === n;
}

console.log(narcissistic(307));