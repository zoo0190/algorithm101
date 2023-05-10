function solution(arr, n) {
    return arr.map((v, i) => {
        if(arr.length % 2 === 0) {
            if(i % 2 === 1) return v + n
        } else {
            if (i % 2 === 0) return v + n
        }
        return v
    })
}