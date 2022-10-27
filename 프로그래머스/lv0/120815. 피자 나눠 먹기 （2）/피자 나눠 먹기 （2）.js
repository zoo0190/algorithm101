function solution(n) {
    var answer = 1;
    while(true) {
        const num = answer * 6
        if(num % n === 0) break;
        answer += 1 
    }
    return answer;
}