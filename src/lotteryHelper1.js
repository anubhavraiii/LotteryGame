function generateRandom(n) {
    let arr = new Array(n);
    for(let i = 0; i < n; i++){
        arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
}

function Sum(arr) {
    return arr.reduce((sum,curr) => sum + curr, 0)
}

function isEqual(arr) {
    for(let i = 1; i < arr.length; i++){
        if(arr[i] != arr[0]) return false;
    }
    return true;
}

export { generateRandom, Sum, isEqual};