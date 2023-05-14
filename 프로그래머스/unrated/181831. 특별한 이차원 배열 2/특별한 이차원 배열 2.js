function solution(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let n = 0; n < arr.length; n++) {
            if(arr[i][n] !== arr[n][i]) return 0
        }
    }
    return 1;
}