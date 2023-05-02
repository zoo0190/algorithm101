function solution(arr, intervals) {
    var answer = [];
    for(const [a, b] of intervals) {
        answer.push(...arr.slice(a, b + 1))
    }
    return answer;
}