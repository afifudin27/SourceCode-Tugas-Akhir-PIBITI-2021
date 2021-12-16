const buildPyramid = (n) =>{
    let py_arr = [];
    let i = 1;
    for(i; i<=n; i++){
        py_arr.push(" ".repeat(n - i) + "*".repeat(i+(i-1)) + " ".repeat(n - i));
    }
    return py_arr;
}
