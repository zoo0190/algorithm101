function solution(arr, idx) {
    let start = idx
    for(let b = start; b < arr.length; b++) {
        if(arr[b] === 1) return b
    }
    return -1;
}