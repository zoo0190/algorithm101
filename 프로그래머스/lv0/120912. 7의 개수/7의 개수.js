function solution(array) {
    var answer = 0;
    array.join('').split('').forEach((item) => {
        if(item === '7') answer += 1
    })
    return answer;
}