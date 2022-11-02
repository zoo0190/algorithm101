function solution(numlist, n) {
    
    const arr = numlist.map((item) => [item, Math.abs(n-item)])
    arr.sort((a, b) => {
        if(a[1] === b[1]) return b[0] - a[0]
        return a[1] - b[1]
    })
    
    return arr.map((item) => item[0]);
}