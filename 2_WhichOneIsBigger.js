const bigger_score = (kata1, kata2) =>{
    
    const abjad = " abcdefghijklmnopqrstuvwxyz";
    let words = [kata1.toLowerCase(),kata2.toLowerCase()];
    let sums = [];
    for(word of words){
        let sum = 0;
        let kata = word;
        for(huruf of kata){
            sum += abjad.indexOf(huruf)
        }
        sums.push(sum)
    }
    return sums[0]>sums[1]? kata1: kata2;

}

let a = bigger_score("CAB", "KILLER");
console.log(a);