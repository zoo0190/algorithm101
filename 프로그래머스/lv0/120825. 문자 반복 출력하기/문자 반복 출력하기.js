function solution(my_string, n) {
    var answer = '';
    for (let s of my_string) {
        for (let num = 0; num < n; num++) {
            answer += s
        }
    }
    return answer;
}