function solution(arr, queries) {
    var answer = [];
    for(const [s, e, k] of queries) {
        const rangeArr = arr.slice(s, e + 1)
        const filterArr = rangeArr.filter((v) => v > k)
        if(filterArr.length) {
            const val = filterArr.sort((a, b) => a - b)[0]
            answer.push(val)
        } else {
            answer.push(-1)
        }
    }
    return answer;
}