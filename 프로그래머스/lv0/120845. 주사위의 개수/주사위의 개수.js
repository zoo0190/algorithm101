function solution(box, n) {
    var answer = 1
    box.forEach((item) => {
        answer *= parseInt(item / n)
    })
    return answer;
}