function solution(arr, query) {
    query.forEach((v, idx) => {
        if(idx % 2 === 0) {
            arr = arr.slice(0, v + 1)
        } else {
            arr = arr.slice(v)
        }
    })
    return arr;
}