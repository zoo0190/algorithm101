function solution(a, d, included) {
    var answer = 0;

    included.forEach((v, idx) => {
        if(v) {
            answer += a + idx * d
        }
    })
    
    return answer;
}