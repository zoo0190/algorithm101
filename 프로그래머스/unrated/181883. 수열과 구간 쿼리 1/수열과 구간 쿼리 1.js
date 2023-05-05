function solution(arr, queries) {
    for(let [s, e] of queries) {
        for(s = s; s <= e; s++) {
            arr[s] += 1
        }
    }
    return arr
}