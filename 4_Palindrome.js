const isPalindrome = (word) =>{
    let i = 0;
    let j = word.lenght - 1;
    let isPal = true;
    while((i <= j)){
        if(word[i].toLowerCase() !== word[j].toLowerCase()){
            isPal = false;
            break
        }
        i++;
        j--;
    }
    return isPal;
}

let a = isPalindrome("makam");
console.log(a);