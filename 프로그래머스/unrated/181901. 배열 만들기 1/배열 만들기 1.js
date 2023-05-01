function solution(n, k) {
    var answer = [];
    let i = 1
    while(k * i <= n) {
        answer.push(k * i)
        i += 1
    }
    return answer;
}