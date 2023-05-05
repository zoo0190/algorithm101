function solution(numbers, n) {
    var answer = 0;
    for(const number of numbers) {
        answer += number
        if(answer > n) return answer
    }
    return answer;
}