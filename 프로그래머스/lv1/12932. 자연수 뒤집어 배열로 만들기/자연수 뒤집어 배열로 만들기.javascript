function solution(n) {
    var answer = []
    n.toString().split('').reverse().forEach((value) => answer.push(Number(value)))
    return answer
}