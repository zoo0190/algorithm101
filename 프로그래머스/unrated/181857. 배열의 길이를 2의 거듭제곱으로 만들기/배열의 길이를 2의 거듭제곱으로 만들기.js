function solution(arr) {
    let i = 0
    while(true) {
        if(2 ** i === arr.length) return arr
        if(2 ** i >= arr.length) {
            return [...arr, ...Array(2 ** i - arr.length).fill(0)]
        }
        i += 1
    }
}