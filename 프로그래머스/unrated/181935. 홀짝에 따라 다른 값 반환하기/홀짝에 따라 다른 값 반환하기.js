function solution(n) {
    var answer = 0;
    let a = 0
    if(n % 2 === 1) {
        a = 1
       	while(a <= n) {
            answer += a
            a += 2
        }
    } else {
        a = 2
        while(a <= n) {
            answer += a ** 2
            a += 2
        }
    }
    return answer;
}