function solution(arr) {
    var answer = [];
    for(const val of arr) {
        answer.push(...Array(val).fill(val))
    }
    return answer;
}