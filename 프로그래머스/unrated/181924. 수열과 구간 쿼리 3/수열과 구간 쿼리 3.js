function solution(arr, queries) {
    for (const [i, j] of queries) {
        const a = arr[i]
        const b = arr[j]
        arr[i] = b
        arr[j] = a
    }
    return arr;
}