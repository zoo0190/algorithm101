function solution(n) {
    const arr = []

    for (let i = 0; i < n; i++) {
        const temp = []
        for (let v = 0; v < n; v++) {
            temp.push(0)
        }
        arr.push(temp)
    }
    
    for(let i = 0; i < n; i++) {
        arr[i][i] = 1
    }

    return arr;
}