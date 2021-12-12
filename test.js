const maxGap = (arr) => {
    arr.sort((a,b ) => a - b);
    let maxDiff = 0;
    if(arr.length < 2) return 0;
    for(let i = 1; i < arr.length; i++) {
        let diff = arr[i] - arr[i-1];
        maxDiff = Math.max(maxDiff, diff);
        prev = arr[i]
    }
    return console.log(maxDiff);
}

const arr = [
    20, 1, 17, 3, 16, 2, 7
]   
maxGap(arr);