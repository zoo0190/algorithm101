function solution(arr, queries) {
    var answer = arr;
    for(let [s, e, k] of queries) {
        for(s = s; s <= e; s++) {
            if(s % k === 0) answer[s]++
        }
    }
    return answer;
}