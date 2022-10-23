function solution(array, n) {
    var answer = 0;
    array.forEach((item) => {
        if(item === n) answer += 1
    })
    return answer;
}