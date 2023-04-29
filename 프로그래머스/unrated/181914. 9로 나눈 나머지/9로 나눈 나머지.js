function solution(number) {
    var answer = 0;
    [...number].forEach((v) => {
        answer += +v
    })
    
    return answer % 9;
}