function solution(a, b, n) {
    var answer = 0;
    
    while(n >= a) {
        const val = parseInt(n / a)
        answer += val * b
        n = (val * b) + (n % a)
    }
    
    return answer;
}