const digital_root = (n) =>{
    let num_array = Array.from(String(n), Number);
    if(n > 9){
        let sum = 0;
        for(num of num_array){
            sum += num;
        }
        return digital_root(sum);
    }else{
        return n;
    }
}

console.log(digital_root(687));