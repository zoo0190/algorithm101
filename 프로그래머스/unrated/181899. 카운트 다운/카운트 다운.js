function solution(start, end) {
    var answer = [];
    while(start >= end) {
        answer.push(start)
        start -= 1
    }
    return answer;
}