function solution(n) {
    var answer = 0;
    answer = n.toString().split('').reduce((acc, cur) => {
        acc += +cur
        return acc
    }, 0)
    return answer;
}