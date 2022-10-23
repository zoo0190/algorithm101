function solution(array, height) {
    var answer = 0;
    array.forEach((item) => {
        if(height < item) answer += 1
    })
    return answer;
}