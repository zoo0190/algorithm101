function solution(n) {
    let answer = parseInt(n / 7)
    return n % 7 === 0 ? answer : answer + 1;
}